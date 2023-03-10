import mongoose from 'mongoose'
import getters from '../../lib/getters.js'
import addressesSchema from './addressesModel.js'
import accountLoginSchema from './accountLoginModel.js'

const primaryOwnerSchema = new mongoose.Schema(
    {
        name: String,
        address: addressesSchema,
        phone: String,
        email: {
            type: String,
            set: getters.toLower
        },
        login: accountLoginSchema
    },
    {
        _id: false
    }
)

export default primaryOwnerSchema