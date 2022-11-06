import mongoose from 'mongoose'

const nameSchema = new mongoose.Schema(
    {
        prefix: String,
        given_name: String,
        mName: String,
        surname: String,
        suffix: String,
        fullName: String,
        title: String,
        department: String
    },
    { 
        _id : false 
    }
)

export default nameSchema