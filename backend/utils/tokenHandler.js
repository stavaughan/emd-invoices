import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import getters from '../lib/getters.js'

const jwtKey = process.env.JWT_SECRET

// Expires in 5 minutes
//const jwtExpirySeconds = 300

// Expires in 30 days
const days = 30
const expiresDays = days * 24 * 60 * 60
const saltRounds = 10;

const tokenHandler = {

    generateKey: (length = 64) => {
        return [...Array(length)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
    },

    token(id) {
        return jwt.sign({ id }, jwtKey, {
            algorithm: "HS256",
            //expiresIn: jwtExpirySeconds
            expiresIn: expiresDays
        })
    },

    async createUserToken(user, code, req, res) {
        const token = tokenHandler.token(user._id);
        res.cookie('jwt', token, {
            expires: getters.expirationDate(expiresDays),
            //maxAge: jwtExpirySeconds * 1000,
            httpOnly: true,
            secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
            sameSite: 'none'
        });
        user.password = undefined;
        res.status(code).json({
            status: 'success',
            data: { user },
            token
        });
    },

    async getHashedPassword(password) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPW = await bcrypt.hash(password, salt);
        return hashedPW
    }
}

export default tokenHandler;
