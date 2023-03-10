import htmlTemplate from './htmlTemplate.js';

const { noAccessWrapper, notFoundPage } = htmlTemplate

const messages = {

    noAccess: () => noAccessWrapper('Access Denied','You dont have permission to view this site.', '403 Forbidden'),

    missingAuthToken: () => noAccessWrapper('No Access', 'No authorization token provided or wrong token sent.', '401 Unauthorized'),

    serverError: () => noAccessWrapper('Server Error', 'The server has encountered a situation it does not know how to handle.', '500 Internal Server Error'),

    notFound: () => notFoundPage('Page Not Found'),

    notFoundJSON: 'the JSON file you\'re looking for cannot be located.',

    notFoundText: 'the Text file you\'re looking for cannot be located.',

    root:  () => noAccessWrapper('No Access', 'Please set to production.', '401 Unauthorized'),

    accessDenied: 'Access Denied! You dont have permission to view this site.',

    errorWithServer: 'Server Error. The server has encountered a situation it does not know how to handle.',

    controllers: {
        users: {
            invalidLogin: 'The login credentials provided are invalid.',
            noActiveAccount: 'The credentials provided do not belong to an active user account.',
            provideDifferentPW: 'You must provide a different password than your existing one.',
            provideEmailnFName: 'Please provide email and first name',
            noMatchEmail: `The email provided doesn't match an existing user. Please contact the administrator.`,
            missingEM: 'Access Forbidden! The email provided is not associated with a user for this account. You must, first, request permission from this accounts owner/admin so that your email can be added to the approved email list before you can register as a new user.',
            provideEmailnPW: 'You must provide both an email and a password.',
            missingEM_FN_PW: 'Please provide your first name, email and password.',
            missingFN_LN: 'Please provide your first and last name.',
            missingEM_NPW_PPW: 'Please provide email, new password and the password you received in your email.',
            userExists: 'User already exists.',
            notVerified: `You haven't verified your account via the link we emailed you. Another verification email has been sent to you.`,
            userInvalid: 'User cannot be validated with information provided.',
            invalidActivation: 'The activation credentials provided are invalid.',
            alreadyVerified: `You are already a verified user. A password rest email has been sent to you. If you don't receive it please go to login and click on "forgot password" to reset your password.`,
            notApprovedEmail: 'Access denied! The email entered is not on the approved list. Please contact application administrator to have your email placed on the list.',
            tempPWnoMatch: 'The temporary password you entered does not with the one sent to you!',
            badServerNoUser: `Problem with server, user couldn't be created at this time`,
            invalidRole: 'Access Denied! The role attached to your user account is an invalid role. Please contact application administrator to have your role updated.',
            deletedUser: (id, email) => `User with id: ${id} has been deleted and email: ${email} has been removed from the approved email list.`,
            deletedUserError: (id) => `User with id: ${id} could not be deleted and email might not have been removed either.`,
            roleNotAuthorized: (role) => `Access Denied! Requested role, ${role}, is not an approved role for this application.`,
            failedToUpdateUser: `Oops! Something went wrong and we failed to update your account with your new password. Please try again.`,
            failedToSendActivation: (userID) => `Error! Failed to send activation request to user ${userID}`,
            nameDoesNotMatch: `The name you entered does not match the name on file for this account with the email provided. Please contact the administrator to resolve the name discrepancy.`,
        },
        collections: {
            updateError: `The id was found but the item could not be updated at this time. try again later.`,
            getItem: (id) => `Failed to fetch item!\nThe requested item, with id number ${id}, cannot be found.`,
            idNotFoud: (id) => `Failed to locate item with id ${id}.`,
            fieldNotFound: (field) => `Failed to locate item with the field value of ${field}.`,
            collectionEmpty: 'The collection is empty.',
            noContent: 'No Content...',
            getItems: 'Failed to upload collection items.',
            newItem: (property) => `Failed to add a new item!\nPlease include a value for ${property} field with your request.`,
            newItems: `Failed to add items!\nPlease add data or the required and properly structured data for the items you wish to add.`,
            updateItem: (id) => `Failed to update!\nThe requested item with the id number of ${id}, was not found.`,
            updateItems: (ids) => `Failed to update! The requested items with the id numbers of ${ids}, were not found.`,
            deleteItemError: (id) => `Failed to delete!\nThe requested item with the id number of ${id}, was not found.`,
            deleteItemsError: (ids) => `The items with the following id numbers were not found: ${ids}.`,
            deleteItemSuccess: (id) => `The requested item with the id number of ${id}, was succesfully deleted.`,
            deleteItemsSuccess: (ids) => `The items with the following id numbers were succesfully deleted: ${ids}.`
        }
    }
}

export default messages;
