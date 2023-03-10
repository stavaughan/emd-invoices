import mongoose from 'mongoose'
import nameSchema from '../subModels/nameModel.js'
import addressesSchema from '../subModels/addressesModel.js'
import socialSchema from '../subModels/socialModel.js'
import phoneSchema from '../subModels/phoneModel.js'

const contactSchema = new mongoose.Schema(
    {
        name: nameSchema,
        fullName: String,
        address: addressesSchema,
        phones: [phoneSchema],
        role: String,
        userRole: {
            type: String,
            enum: [
                '',
                'admin',
                'accountOwner',
                'designatedperson',
                'developer',
                'designatedfinancial',
                'designatedattorney',
                'approvedvisitor'
            ]
        },
        businessID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Business'
        },
        businessRole: String,
        email: String,
        organization: String,
        website: String,
        avatarID: String,
        group: String,
        department: String,
        venID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor'
        },
        social: [socialSchema],
        tags: [String],
        notes: String
    },
    {
        timestamps: true
    }
)

const Contact = mongoose.model('Contact', contactSchema, 'contacts')

export default Contact
