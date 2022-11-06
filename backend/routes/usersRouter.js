import express from 'express'
import usersController from '../controllers/usersController.js'
import { protect } from '../middleware/authMiddleware.js'
const {
    forgotPassword,
    requestAccess,
    newAccount,
    resetPassword,
    verifyEmail,
    activateUser,
    deleteUser,
    updateUser,
    loginUser,
    grantAccess,
    updateUserContact,
    resetUserName,
    getUsers,
    getUser
} = usersController;

const usersRouter = express.Router();

usersRouter.get('/', protect, getUsers)
usersRouter.post('/login', loginUser)
usersRouter.post('/forgot-password', forgotPassword)
usersRouter.post('/verify-email', verifyEmail)
usersRouter.post('/request-access', requestAccess)
usersRouter.post('/new-account', newAccount)
usersRouter.post('/grant-access', protect, grantAccess)
usersRouter.post('/activate', protect, activateUser)
usersRouter.post('/reset', protect, resetPassword)
usersRouter.patch('/update', protect, updateUserContact)
usersRouter.patch('/reset-useremail', protect, resetUserName)
usersRouter.route('/:id')
    .get(protect, getUser)
    .patch(protect, updateUser)
    .delete(protect, deleteUser);

export default usersRouter
