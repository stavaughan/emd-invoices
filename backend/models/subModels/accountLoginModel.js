import mongoose from 'mongoose'
import securityQuestionSchema from './securityQuestionModel.js'
import encryptSchema from './encryptModel.js'

const accountLoginSchema = new mongoose.Schema(
    {
        url: String,
        username: String,
        username2: encryptSchema,
        password: String,
        password2: encryptSchema,
        pin: Number,
        pin2: encryptSchema,
        securityMessage: String,
        securityMessage2: encryptSchema,
        securityQuestions: [securityQuestionSchema]
    },
    {
        _id : false
    }
)

export default accountLoginSchema
