import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/app/userModel.js'
import messages from '../utils/messages.js'
import tokenHandler from '../utils/tokenHandler.js'

const jwtKey = process.env.JWT_SECRET

// Token served as Bearer token in Authorization header
export const protect = asyncHandler(async (req, res, next) => {
    const authorization = await req.headers?.authorization;
    if (authorization && authorization.startsWith('Bearer')) {
        const token = authorization.split(' ')[1]
        if (!token) {
            res.status(403)
            throw new Error('Access denied! No token provided')
        }
        try {
            const decoded = jwt.verify(token, jwtKey)
            if (decoded?.id) {
                req.user = await User.findById(decoded.id).select('-password')
            }
            next()
        } catch (error) {
            res.status(403)
            throw new Error('Access denied! Token no good.')
        }
    } else {
        res.status(403).type('html').send(messages.noAccess())
    }
})

// TODO: replace protect with this after storing token in cookie
// token served in req from stored cookie
export const newProtect = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.status(403)
        throw new Error('Access denied! No token provided')
    }
    try {
        const decoded = jwt.verify(token, jwtKey)
        if (decoded?.id) {
            req.user = await User.findById(decoded.id).select('-password')
        }
        next()
    } catch (e) {
        res.status(403)
        res.type('html').send(messages.noAccess())
    }
})

// TODO: Add refresh token where client refreshes token in background every 5 minutes. Do this after storing token in cookie.
export const refreshToken = asyncHandler(async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.status(403)
        throw new Error('Access denied! No token provided')
    }
    try {
        const decoded = jwt.verify(token, jwtKey);
        const user = await User.findById(decoded.id);
        if (!user) {
            res.status(401)
            throw new Error('User not found.')
        }
        tokenHandler.createUserToken(user, 200, req, res);
        //TODO: update user with new token
        next()
    } catch (err) {
        if (err instanceof jwt.JsonWebTokenError) {
            res.status(401)
            throw new Error(err)
        }
        res.status(400)
        throw new Error(err)
    }
})

export const verifyEmail = asyncHandler(async (req, res, next) => {
    const email = req.body?.email;
    if (!email) {
        res.status(400)
        throw new Error('Please provide your email..')
    }
    const userExists = await User.findOne({ email: email.toLowerCase() })
    if (userExists?.email) {
        next()
    } else {
        res.status(401)
        throw new Error('User email cannot be verified at this time. Please check your email or enter a correct one.')
    }
})

export const verifyUser = asyncHandler(async (req, res, next) => {
    const { firstName, email, password } = req.body

    if (!firstName || !email || !password) {
        res.status(400)
        throw new Error('Please provide firstName, email and password!')
    }
    const userExists = await User.findOne({ email: email.toLowerCase() })
    if (userExists) {
        res.status(400)
        throw new Error('User is already registered!')
    }
    const emailVerified = !!email
    if (emailVerified) {
        next()
    } else {
        res.status(401)
        throw new Error('Invalid user data')
    }
})
