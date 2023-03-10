import mongoose from 'mongoose'

const securityQuestionSchema2 = new mongoose.Schema(
    {
        question: {
            cid: String,
            maskedStr: String
        },
        answer: {
            cid: String,
            maskedStr: String
        }
    }
)

export default securityQuestionSchema2
