import Contact from '../models/app/contactModel.js'
import User from '../models/app/userModel.js'
import EmailList from '../models/app/emailListModel.js'
import messages from '../utils/messages.js'

const { users } = messages.controllers;

const userContactLogic = {

    addEmailMarkApproved: async (res, email) => {
        try {
            const newEntry = await EmailList.create({ email: email.toLowerCase(), approved: true })
            return newEntry?.email
        } catch (err) {
            res.status(401).send({ message: `Error! failed to add email ${email} to approved email list` })
        }
    },

    updateEmailMarkApproved: async (res, id, email) => {
        try {
            const updated = await EmailList.findByIdAndUpdate(id, { approved: true })
            return updated.email;
        } catch (err) {
            res.status(401).send({ message: `Error! failed to update email, ${email}, status to approved on email list` })
        }
    },

    addApprovedEmail: async (res, email) => {
        try {
            // check if email is already in email list
            const emailListItem = await EmailList.findOne({ email: email.toLowerCase() })
            const emailOnList = emailListItem && !!emailListItem?.email;
            if (emailOnList) {
                if (emailListItem?.approved) {
                    return email;
                } else {
                    const updatedEmail = await userContactLogic.updateEmailMarkApproved(res, emailListItem?._id, email)
                    return updatedEmail;
                }
            } else {
                const newEmail = await userContactLogic.addEmailMarkApproved(res, email)
                return newEmail;
            }
        } catch (error) {
            res.status(401).send({ message: `Error! failed to add or update email, ${email}, to approved email list` })
        }
    },

    missingParam: (res, params, message) => {
        const boolParams = params.map(p => Boolean(p));
        if (!boolParams.includes(true)) {
            res.status(401).send({ message: users[message] })
        }
    },

    getUserName: async (res, email) => {
        try {
            const contact = await Contact.findOne({ email: email.toLowerCase() })
            const userName = contact?.name?.fullName;
            return userName
        } catch (error) {
            res.status(400).send({ message: error })
        }
    },

    userContact: async ({
        res,
        email,
        firstName = '',
        lastName = '',
        userRole
    }) => {

        const fullName = firstName ? `${firstName} ${lastName}` : '';

        const name = {
            given_name: firstName,
            surname: lastName,
            fullName
        };

        // Check to see if contact exists by email
        const existingUser = await Contact.findOne({ email: email.toLowerCase() })

        // If contact exists get contactID
        const existingID = existingUser && existingUser?._id ? existingUser._id : '';

        try {
            // If contact exists add 'userRole' field, else create a new contact
            const contact = existingID
                ? await Contact.findByIdAndUpdate(existingID, { userRole }, { new: true })
                : await Contact.create({
                    name,
                    fullName,
                    email,
                    userRole
                })

            return {
                contactID: contact?._id,
                fullName: contact?.fullName
            }

        } catch (error) {
            res.status(400).send({ message: error })
        }
    },

    updateUserPassword: async (res, userID, hashedPassword) => {
        try {
            const user = await User.findByIdAndUpdate(userID, {
                password: hashedPassword,
                verified: true,
            }, { new: true });
            return user
        } catch (error) {
            res.status(500).send({ message: users.badServerNoUser })
        }
    },

    createUser: async ({ res, email, contactID, password, access, userRole }) => {
        try {
            const newUser = await User.create({
                email,
                contactID,
                password,
                userRole,
                access
            });
            return newUser
        } catch (error) {
            res.status(400).send({ message: error })
        }
    },

    updatedUser: async ({
        res,
        email,
        firstName,
        lastName,
        userRole,
        userID,
        hashedPassword
    }) => {

        // create or update contact associated with new user and return id
        const { contactID, fullName } = await userContactLogic.userContact({
            res,
            email,
            firstName,
            lastName,
            userRole
        })

        const updatedUser = userID
            ? await userContactLogic.updateUserPassword(res, userID, hashedPassword)
            : await userContactLogic.createUser({
                res,
                email,
                contactID,
                hashedPassword,
                userName: firstName ? `${firstName} ${lastName}` : ''
            });

        if (updatedUser && updatedUser?._id) {
            return { user: updatedUser, fullName }
        } else {
            res.status(400).send({ message: users.badServerNoUser })
        }
    }
}

export default userContactLogic
