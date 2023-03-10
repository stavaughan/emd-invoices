import mongoose from 'mongoose'
import getters from '../../lib/getters.js'

const userSchema = new mongoose.Schema(
    {
        userID: String,
        email: {
            type: String,
            required: [true, 'Please add your email'],
            unique: true,
            set: getters.toLower
        },
        verified: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: [true, 'Please add a password']
        },
        contactID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact'
        },
        access: String,
        userRole: {
            type: String,
            enum: ['admin', 'accountOwner', 'designatedperson', 'developer', 'designatedfinancial', 'designatedattorney', 'approvedvisitor']
        },
        settings: {
            notifications: {
                differentIPsignIn: {
                    type: Boolean,
                    default: false
                },
                unusualActivity: {
                    type: Boolean,
                    default: false
                },
                newFeaturesUpdates: {
                    type: Boolean,
                    default: false
                },
                newEmailMessages: {
                    type: Boolean,
                    default: false
                }
            },
            privacy: {
                allowPublicProfile: {
                    type: Boolean,
                    default: false
                },
                allowOnlineStatus: {
                    type: Boolean,
                    default: false
                },
                allowProfileOnlineUpdate: {
                    type: Boolean,
                    default: false
                }
            }
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema, 'users')

export default User
