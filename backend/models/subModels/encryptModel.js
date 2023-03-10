import mongoose from 'mongoose'

const encryptSchema = new mongoose.Schema(
    {
        cid: String,
        maskedStr: String,
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        _id : false
    }
)

export default encryptSchema
