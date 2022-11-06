import mongoose from 'mongoose'
import addressSchema from '../subModels/addressModel.js'

const businessSchema = new mongoose.Schema(
    {
        contactIDs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact'
        }],
        longName: String,
        shortName: String,
        address: addressSchema,
        email: String,
        phone: String,
        website: String,
        tax_id: String,
        notes: String,
        logoID: String,
        brandColor: String
    },
    {
        timestamps: true
    }
)

const Business = mongoose.model('Business', businessSchema, 'businesses')

export default Business
