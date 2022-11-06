import mongoose from 'mongoose'

const addressSchema = new mongoose.Schema(
    {
        type: String,
        addressee: String,
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip_code: String,
        cc: {
            type: String,
            default: 'USA'
        },
        department: String
    }
) 

export default addressSchema