import mongoose from 'mongoose'

const userRolesSchema = new mongoose.Schema(
    {
        roleID: String,
        role: String,
        note: String,
        permissions: [String]
    },
    {
        timestamps: true
    }
)

const UserRoles = mongoose.model('UserRoles', userRolesSchema, 'user-roles')

export default UserRoles
