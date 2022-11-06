import mongoose from 'mongoose'

const fileSchema = new mongoose.Schema(
    {
        documentType: String,
        documentID: String,
        location: String,
        format: {
            type: String,
            enum: ['pdf', 'hard copy']
        },
        fileID: {
            number: String,
            jurisdiction: String
        }
    }
)

export default fileSchema