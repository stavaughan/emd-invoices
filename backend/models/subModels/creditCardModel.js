import mongoose from 'mongoose'
import encryptSchema from '../subModels/encryptModel.js'

const creditCardSchema = new mongoose.Schema(
    {
        nameOnCard: String,  
        creditCardNumber: String,
        expDate: String,
        cvc: String,
        zip: String,
        creditCardNumber2: encryptSchema,
        cvc2: encryptSchema,
        zip2: encryptSchema
    }
)

export default creditCardSchema
