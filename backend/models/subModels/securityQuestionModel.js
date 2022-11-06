import mongoose from 'mongoose'

const securityQuestionSchema = new mongoose.Schema(
    {
        question: String,
        answer: String
    }
)

export default securityQuestionSchema