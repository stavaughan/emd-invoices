import mongoose from 'mongoose'

const userPermissionsSchema = new mongoose.Schema(
    {
        pid: String,
        category: String,
        label: String,
        statement: String
    },
    {
        timestamps: true
    }
)

const UserPermissions = mongoose.model('UserPermissions', userPermissionsSchema, 'user-permissions')

export default UserPermissions
