import controllerLogic from './controllerLogic.js'
import asyncHandler from 'express-async-handler'
import User from '../models/app/userModel.js'
import usersLogic from './usersLogic.js'

const {
    getCollectionItem,
    getCollectionItems,
    updateCollectionItem
} = controllerLogic

const {
    handleUserActivation,
    handleForgotPassword,
    handleVerifyEmail,
    handleGrantAccess,
    handleRequestAccess,
    handleResetPassword,
    handleNewAccountSetup,
    handleDeleteUser,
    handleUserLogin,
    handleUserContactUpdate,
    handleUserEmailUpdate
} = usersLogic

const usersController = {

    /**
     * @desc Activate new user
     * @route POST /api/users/activate
     * @access Public
     */
    activateUser: asyncHandler(async (req, res, next) => await handleUserActivation(req, res, next)),

    /**
     * @desc Authenticate a user
     * @route POST /api/users/login
     * @access Public
     */
    loginUser: asyncHandler(async (req, res, next) => await handleUserLogin(req, res, next)),

    /**
     * @desc verify user by email, then send reset link via email
     * @route POST /api/users/forgot-password
     * @access Public
     */
    forgotPassword: asyncHandler(async (req, res, next) => await handleForgotPassword(req, res, next)),

    /**
     * @desc verify user by email, then send reset link via email
     * @route POST /api/users/verify-email
     * @access Public
     */
    verifyEmail: asyncHandler(async (req, res, next) => await handleVerifyEmail(req, res, next)),

    /**
     * @desc verify user by email, then send user registration link via email
     * @route POST /api/users/request-access
     * @access Public
     */
    requestAccess: asyncHandler(async (req, res, next) => await handleRequestAccess(req, res, next)),

    /**
 * @desc setup new account for user as admin and send verification link in email
 * @route POST /api/users/new-account
 * @access Public
 */
    newAccount: asyncHandler(async (req, res, next) => await handleNewAccountSetup(req, res, next)),

    /**
     * @desc verify user by email, then send user registration link via email
     * @route POST /api/users/grant-access
     * @access Public
     */
    grantAccess: asyncHandler(async (req, res, next) => await handleGrantAccess(req, res, next)),

    /**
     * @desc Register new user
     * @route POST /api/users/reset-password
     * @access Public
     */
    resetPassword: asyncHandler(async (req, res, next) => await handleResetPassword(req, res, next)),

    /**
     * @desc Get user data
     * @route GET /api/users/user
     * @access Private
     */
    getUser: asyncHandler(async (req, res, next) => await getCollectionItem(User, req, res, next)),

    /**
     * @desc Get Users
     * @route GET /api/users
     * @access Private
     */
    getUsers: asyncHandler(async (req, res, next) => await getCollectionItems(User, req, res, next)),

    /**
     * @desc Update User Contact
     * @route PATCH /api/users/update
     * @access Private
     */
    updateUserContact: asyncHandler(async (req, res, next) => await handleUserContactUpdate(req, res, next)),

    /**
     * @desc Update User email for login
     * @route PATCH /api/users/reset-useremail
     * @access Private
     */
    resetUserName: asyncHandler(async (req, res, next) => await handleUserEmailUpdate(req, res, next)),

    /**
     * @desc Update User
     * @route PATCH /api/users/id
     * @access Private
     */
    updateUser: asyncHandler(async (req, res, next) => await updateCollectionItem(User, req, res, next)),

    /**
     * @desc Delete User
     * @route DELETE /api/users/id
     * @access Private
     */
    deleteUser: asyncHandler(async (req, res, next) => await handleDeleteUser(User, req, res, next))

}

export default usersController
