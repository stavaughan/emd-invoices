import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema(
    {
        type: String,
        country_code: {
            type: String,
            default: '001'
        },
        number: String,
        ext: String,
        id: String
    },
    {
        _id : false
    }
)

export default phoneSchema
