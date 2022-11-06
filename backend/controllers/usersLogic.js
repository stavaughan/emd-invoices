import bcrypt from 'bcryptjs'
import tokenHandler from '../utils/tokenHandler.js'
import Contact from '../models/app/contactModel.js'
import User from '../models/app/userModel.js'
import EmailList from '../models/app/emailListModel.js'
import messages from '../utils/messages.js'
import userEmailLogic from './userEmailLogic.js'
import userContactLogic from './userContactLogic.js'
import passwordLogic from '../utils/passwordLogic.js'
import permissions from '../config/permissions.js'
import {
    sendResetEmail,
    sendActivationEmail,
    sendEmailUpdateNotice
} from './mailer.js'
import collectionsLogic from './collectionsLogic.js'

const msgs = messages.controllers.users;

const {
    updateUserPassword,
    userContact,
    createUser,
    getUserName,
    missingParam,
    addApprovedEmail
} = userContactLogic;

const {
    userByEmailcheck,
    approvedEmail,
    newUserEmailCheck,
    approvedUserByEmail,
    newAccountEmailCheck
} = userEmailLogic;

const {
    findByID,
    validateUserRole
} = collectionsLogic;
const { temporaryPassword } = passwordLogic;

const forgotPassword = async (res, email) => {

    // check if email is already associated with existing user account
    // and that the email is on the approved email list as well.
    const user = await userByEmailcheck(res, email, 'noMatchEmail')

    // check to see if user role is a valid role
    // if not valid, return error
    // while this may seem trivial, it is important to check as the user
    // will have access to sensative data based on their role
    // This is one of the many security checks, built in, to ensure that the user
    // is not trying to access data that they are not authorized to access
    validateUserRole(res, user?.userRole)

    try {
        sendResetEmail({
            user,
            token: tokenHandler.token(user?._id)
        })
        res.status(200).json({ email: user?.email })
    } catch (err) {
        res.status(500).send({ message: `failed to send email for password update. Please try again` })
    }
};

const verifyEmail = async (res, email) => {

    // Check to see if email is on the admin appoved list
    // check if email is associated with existing user
    const user = await approvedUserByEmail(res, email)

    validateUserRole(res, user?.userRole)

    const userID = user?._id;
    const token = tokenHandler.token(userID);
    const userName = await getUserName(res, email);

    // generate temporary password for user
    const { password, hashedPassword } = await temporaryPassword()

    // updateUser with new temporary password
    const updatedUser = await updateUserPassword(res, userID, hashedPassword)

    try {
        sendActivationEmail({ email, userName, password, token })
        res.status(200).json({ ...updatedUser, token })
    } catch (err) {
        res.status(500).send({ message: `failed to send email for verification update. Please try again` })
    }
};

const existingVerifiedUser = async (res, email) => {
    try {
        await forgotPassword(res, email)
        res.status(201).json({ message: msgs.alreadyVerified })
    } catch (err) {
        res.status(500).send({ message: `Error while determining verification. Please try again` })
    }
};

const existingUnverifiedUser = async (res, email) => {
    try {
        await verifyEmail(res, email)
        res.status(201).json({ message: msgs.notVerified })
    } catch (err) {
        res.status(500).send({ message: `Error while determining verification. Please try again` })
    }
}

const userAlreadyExists = async (res, newUser) => {
    const { email, verifiedUser, unverifiedUser } = newUser;
    try {
        switch (true) {
            case verifiedUser:
                await existingVerifiedUser(res, email)
                break;
            case unverifiedUser:
                await existingUnverifiedUser(res, email)
                break;
            default:
                return email
        }
    } catch (err) {
        res.status(500).send({ message: `Error while determining verification. Please try again` })
    }
};

const activateNewUser = async (res, firstName, lastName, email, userRole) => {

    // 1. Check to see if email is associated with existing contact
    // 2. if not associated with existing contact, create new contact
    // 3. if associated with existing contact, update contact
    const { contactID, fullName } = await userContact({
        res,
        firstName,
        lastName,
        email,
        userRole
    })

    // generate temporary password for user
    const { password, hashedPassword } = await temporaryPassword()

    // find corresponding user access for user role
    const access = permissions.find(_ => _.role === userRole).access;

    // Create user account
    const user = await createUser({
        res,
        email,
        contactID,
        password: hashedPassword,
        access,
        userRole
    });

    try {
        if (user?._id) {
            const token = tokenHandler.token(user?._id);
            sendActivationEmail({
                email,
                userName: fullName,
                password,
                token
            })
            res.status(200).json({ ...user, token })
        } else {
            res.status(401).send({ message: 'Error! Failed to update or create new user account.' })
        }
    } catch (error) {
        res.status(401).send({ message: msgs.failedToSendActivation(user?._id) })
    }
};

export const compileUser = (user, contact) => {
    const userObj = {
        _id: user._id,
        userID: user._id,
        verified: user.verified,
        userEmail: user.email,
        contactID: user.contactID,
        avatarID: contact?.avatarID,
        access: user.access,
        userName: contact?.fullName,
        token: tokenHandler.token(user._id),
        userRole: user.userRole,
        userContactData: contact
    }
    return userObj;
};

const usersLogic = {

    userContactData: async (res, user) => {
        const contact = await findByID(res, Contact, user?.contactID);
        const userObj = compileUser(user, contact);
        return userObj;
    },

    handleUserContactUpdate: async (req, res) => {
        const { userID, contactID, updateData } = req.body;
        try {
            const user = await User.findById(userID)
            const updatedContact = await Contact.findByIdAndUpdate(contactID, updateData, { new: true })
            const updatedUserContact = compileUser(user, updatedContact);
            res.status(200).json(updatedUserContact)
        } catch (error) {
            res.status(401).send({
                message: 'Error! Failed to update user data.'
            })
        }
    },

    // Update email used for login
    handleUserEmailUpdate: async (req, res) => {
        const { userID, contactID, userEmail, currentEmail } = req.body;
        try {
            const user = await User.findByIdAndUpdate(userID, {
                email: userEmail.toLowerCase()
            }, { new: true })

            const token = tokenHandler.token(user?._id);
            // generate temporary password for user
            const { password, hashedPassword } = await temporaryPassword()

            // updateUser with new temporary password
            const updatedUser = await updateUserPassword(res, userID, hashedPassword)

            const updatedContact = await Contact.findById(contactID)
            const updatedUserContact = compileUser(updatedUser, updatedContact);

            sendEmailUpdateNotice({
                currentEmail: currentEmail,
                newEmail: userEmail,
                userName: updatedContact.fullName,
                password,
                token
            })
            res.status(200).json(updatedUserContact)
        } catch (error) {
            res.status(401).send({
                message: 'Error! Failed to update user email.'
            })
        }
    },

    handleUserLogin: async (req, res) => {

        const { password, email } = req.body;

        // check if email is already associated with existing user account
        // and that the email is on the approved email list as well.
        const user = await userByEmailcheck(res, email, 'invalidLogin');

        // check to see if user role is a valid role
        // if not valid, return error
        // while this may seem trivial, it is important to check as the user
        // will have access to sensative data based on their role
        // This is one of the many security checks, built in, to ensure that the user
        // is not trying to access data that they are not authorized to access
        validateUserRole(res, user?.userRole)

        // check new user submitted password against existing password
        // return error if password is the same
        const pwCompare = await bcrypt.compare(password, user?.password);
        missingParam(res, [pwCompare], 'invalidLogin')

        missingParam(res, [user?.verified], 'notVerified')

        try {
            const userObj = await usersLogic.userContactData(res, user)
            res.status(200).json(userObj)
        } catch (err) {
            res.status(401).send({
                message: 'Error! Login failed. Please try again'
            })
        }
    },

    handleUserActivation: async (req, res) => {

        const { email, password, suppliedPassword } = req.body;

        // check if all required data from user is present
        missingParam(res, [email, password, suppliedPassword], 'missingEM_NPW_PPW')

        // check if email is already associated with existing user account
        // and that the email is on the approved email list as well.
        // User should be active and on approved email list
        const user = await userByEmailcheck(res, email, 'noMatchEmail')

        // check to see if user role is a valid role
        // if not valid, return error
        // while this may seem trivial, it is important to check as the user
        // will have access to sensative data based on their role
        // This is one of the many security checks, built in, to ensure that the user
        // is not trying to access data that they are not authorized to access
        validateUserRole(res, user?.userRole)

        // check new user submitted password against existing password
        // return error if password is the same
        const pwCompare = await bcrypt.compare(suppliedPassword, user?.password);
        const userID = user?._id || '';

        // check if user returned correct temporary password sent to them
        // if not, return error
        missingParam(res, [pwCompare, userID], 'tempPWnoMatch')

        try {
            // generate password token which will be stored in the user's account
            const hashedPassword = await tokenHandler.getHashedPassword(password)

            // udate user account with hashed representation of new password
            const userUpdate = await userContactLogic.updateUserPassword(res, userID, hashedPassword);
            const updatedUser = await usersLogic.userContactData(res, userUpdate);
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(400).send({
                message: msgs.failedToUpdateUser
            })
        }
    },

    handleForgotPassword: async (req, res) => {
        const { email } = req.body;
        await forgotPassword(res, email)
    },

    handleVerifyEmail: async (req, res) => {
        const { email } = req.body
        missingParam(res, [email], 'missingEM')
        await verifyEmail(res, email)
    },

    handleGrantAccess: async (req, res) => {

        const { email, firstName, lastName, userRole } = req.body

        // Verify if user role passed in the request body is valid
        // If not valid, return error else continue
        validateUserRole(res, userRole)

        // Check to see if email is not missing in the request body
        // If missing, return error else continue
        missingParam(res, [email], 'missingEM')

        // Check to see if first name and last name are not missing in the request body
        // If missing, return error else continue
        missingParam(res, [firstName, lastName], 'missingFN_LN')

        // 1. Check to see if email is on the admin appoved list
        // 2. if not on the list, update list with new email
        const approvedEmail = await addApprovedEmail(res, email)

        // check if email is associated with existing user
        const newUser = await newUserEmailCheck(res, approvedEmail)
        const { userEmail } = newUser

        // if user exists and verified, send email to reset password
        // if user exists and not verified, send activation email
        const checkedEmail = await userAlreadyExists(res, {
            verifiedUser: newUser?.verifiedUser,
            unverifiedUser: newUser?.unverifiedUser,
            email: userEmail,
            firstName,
            lastName
        });

        if (checkedEmail) {
            await activateNewUser(res, firstName, lastName, checkedEmail, userRole)
        }
    },

    handleRequestAccess: async (req, res) => {

        const { email, firstName, lastName, userRole } = req.body

        // Verify if user role passed in the request body is valid
        // If not valid, return error else continue
        validateUserRole(res, userRole)

        // Check to see if email is not missing in the request body
        // If missing, return error else continue
        missingParam(res, [email], 'missingEM')

        // Check to see if first name and last name are not missing in the request body
        // If missing, return error else continue
        missingParam(res, [firstName, lastName], 'missingFN_LN')

        // Check to see if email is on the admin appoved list
        const adminApprovedEmail = await approvedEmail(res, email)

        // check if email is associated with existing user
        const newUser = await newUserEmailCheck(res, adminApprovedEmail)
        const { userEmail } = newUser

        // if user and user already verified, send email to reset password
        // if user and user not verified, send activation email
        const checkedEmail = await userAlreadyExists(res, {
            verifiedUser: newUser?.verifiedUser,
            unverifiedUser: newUser?.unverifiedUser,
            email: userEmail,
            firstName,
            lastName
        })
        if (checkedEmail) {
            await activateNewUser(res, firstName, lastName, checkedEmail, userRole)
        } else {
            res.status(400).send({
                message: `Error! failed to handle request for access. Please try again`
            })
        }
    },

    handleNewAccountSetup: async (req, res) => {

        const { email, firstName, lastName } = req.body

        missingParam(res, [email], 'missingEM')
        missingParam(res, [firstName, lastName], 'missingFN_LN')

        // Check to see if users already exist
        const validEmail = await newAccountEmailCheck(res, email);

        // 1. Check to see if email is on the admin appoved list
        // 2. if not on the list, update list with new email
        const approvedEmail = await addApprovedEmail(res, validEmail);

        // Create user contact file
        const { contactID, fullName } = await userContact({
            res,
            firstName,
            lastName,
            email: approvedEmail,
            userRole: 'admin'
        })

        // generate temporary password for user
        const { password, hashedPassword } = await temporaryPassword()

        // Create user account
        const user = await createUser({
            res,
            email: validEmail,
            contactID,
            password: hashedPassword,
            userRole: 'admin',
            access: 'admin'
        });

        try {
            const token = tokenHandler.token(user?._id);
            sendActivationEmail({
                email,
                userName: fullName,
                password,
                token
            })
            res.status(200).json({ ...user, token })
        } catch (error) {
            res.status(401).send({
                message: `Error! failed to handle new user account setup. Please try again`
            })
        }
    },

    handleDeleteUser: async (Collection, req, res) => {
        const reqID = req.params?.id;
        try {
            // handle delete user
            const deletedUser = await Collection.findOneAndRemove({ '_id': reqID }).exec();
            const email = deletedUser?.email;

            // update email list by updating approved status to false
            // do not want to delete email for discoverablility concerns
            await EmailList.findOneAndUpdate({ email: email.toLowerCase() }, { approved: false }).exec();

            // Find user contact account and update userRole to empty string
            await Contact.findOneAndUpdate({ email: email.toLowerCase() }, { userRole: '' }).exec();

            res.status(200).json({
                id: reqID,
                message: msgs.deletedUser(deletedUser?._id, deletedUser?.email)
            })
        } catch (err) {
            res.status(401).send({ message: msgs.deletedUserError(reqID) })
        }
    },

    handleResetPassword: async (req, res) => {

        const { email, password } = req.body

        // check if all required data from user is present
        missingParam(res, [email, password], 'provideEmailnPW')

        // check if email is already associated with existing user account
        // and that the email is on the approved email list as well.
        const user = await userByEmailcheck(res, email, 'noMatchEmail')

        // check to see if user role is a valid role
        // if not valid, return error
        // while this may seem trivial, it is important to check as the user
        // will have access to sensative data based on their role
        // This is one of the many security checks, built in, to ensure that the user
        // is not trying to access data that they are not authorized to access
        validateUserRole(res, user?.userRole)

        // check new user submitted password against existing password
        const pwCompare = await bcrypt.compare(password, user.password);

        if (pwCompare) {
            // return error if password is the same
            res.status(401).send({ message: msgs.provideDifferentPW })
        } else {
            try {
                // generate password token which will be stored in the user's account
                const hashedPassword = await tokenHandler.getHashedPassword(password)

                // udate user account with hashed representation of new password
                const userUpdate = await userContactLogic.updateUserPassword(res, user?._id, hashedPassword);
                const updatedUser = await usersLogic.userContactData(res, userUpdate);
                res.status(200).json(updatedUser)

            } catch (error) {
                res.status(400).send({ message: msgs.failedToUpdateUser })
            }
        }
    }
}

export default usersLogic
