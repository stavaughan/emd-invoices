import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(
    {
        action: {
            type: String,
            required: true,
            enum: ['newSignup']
        },
        priority: {
            type: String,
            required: true,
            enum: ['high', 'medium', 'low']
        },
        payload: {
            type: Object
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

const Admin = mongoose.model('Admin', adminSchema, 'admin-store')

export default Admin