import mongoose from 'mongoose'

const professionalContactSchema = new mongoose.Schema(
    {
        type: String,
        contactID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact'
        },
        support: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact'
        }]
    }
)

export default professionalContactSchema