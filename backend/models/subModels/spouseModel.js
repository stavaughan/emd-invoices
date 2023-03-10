import mongoose from 'mongoose'
import getters from '../../lib/getters.js'
import nameSchema from './nameModel.js'
import addressesSchema from './addressesModel.js'
import socialSchema from './socialModel.js'
import fileSchema from './fileModel.js'

const spouseSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            enum: ['deceased', 'living', 'incapacitated']
        },
        name: nameSchema,
        address: addressesSchema,
        email: { 
            type: String, 
            set: getters.toLower 
        },
        phone: String,
        information: {
            SSN: String,
            DOB: String,
            DOD: String
        },
        files: [fileSchema],
        socialAccounts: [socialSchema]
    },
    {
        timestamps: true,
        _id : false 
    }
)

export default spouseSchema