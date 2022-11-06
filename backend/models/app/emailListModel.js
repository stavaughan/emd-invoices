import mongoose from 'mongoose'
import getters from '../../lib/getters.js'

const emailListSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please add your email'],
            unique: true,
            set: getters.toLower
        },
        approved: Boolean
    },
    {
        timestamps: true
    }
)

const EmailList = mongoose.model('EmailList', emailListSchema, 'email-list')

export default EmailList