import User from '../models/app/userModel.js'
import EmailList from '../models/app/emailListModel.js'
import messages from '../utils/messages.js'

const msgs = messages.controllers.users;

const userEmailLogic = {

    // Only want to see if email is connected to existing account
    userByEmail: async (email) => {
        const existingUser = await User.findOne({ email: email.toLowerCase() })
        return  existingUser;
    },

    userByEmailcheck: async (res, email, msg) => {

        const user = await userEmailLogic.userByEmail(email)

        if(!user?.email) {
            res.status(401).send({ message: msgs[msg] })
        } else {
            return user
        }
    },

    // For new account, need to verify that user collection is empty or send error,
    // put user email in emailList collection.
    // If user attempting to create new account with database already populated with existing user's, then user can't be 'admin', therefore user can't create new account from current database. I hope this is a little bit clearer than mud, but I'm not sure.
    // I'm not sure if this is the best way to handle this, but I think it's a good start.
    newAccountEmailCheck: async (res, email) => {
        const users = await User.find();
        if (users?.length) {
            const user = await userEmailLogic.userByEmail(email)
            if(user) {
                res.status(401).send({ message: msgs.alreadyVerified })
            } else {
                res.status(403).send({ message: msgs.missingEM })
            }
        } else {
            return email
        }
    },

    newUserEmailCheck: async (res, email) => {

        try {
            // check if email is already associated with existing user account
            const user = await userEmailLogic.userByEmail(email)
            if(user && user?.email) {
                return {
                    userEmail: email,
                    verifiedUser: user?.email && user?.verified === true,
                    unverifiedUser: user?.email && user?.verified === false
                }
            } else {
                return {
                    userEmail: email,
                    verifiedUser: false,
                    unverifiedUser: false
                }
            }
        } catch (err) {
            res.status(500).send({ message: err })
        }
    },

    // checks to see if entered email is on the approved email list
    approvedEmail: async (res, email) => {

        const approvedUser = await EmailList.findOne({
            email: email.toLowerCase(),
            approved: true
        })

        if (approvedUser && approvedUser?.email) {
            return approvedUser?.email
        } else {
            res.status(401).send({ message: msgs.notApprovedEmail })
        }
    },

    // checks to see if entered email is on the approved email list and that the user is a listed user
    approvedUserByEmail: async (res, email) => {
        const approvedEmail = await userEmailLogic.approvedEmail(res, email);
        const approvedUser = await userEmailLogic.userByEmailcheck(res, approvedEmail, 'noMatchEmail');
        return approvedUser
    }
}

export default userEmailLogic
