import mongoose from 'mongoose'
import addressSchema from './addressModel.js'

const idDocumentSchema = new mongoose.Schema(
    {
        docID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Document'
        },
        documentType: String,
        jurisdiction: String,
        documentID: String,
        nameOnID: String,
        addressOnID: addressSchema
    }
)

export default idDocumentSchema