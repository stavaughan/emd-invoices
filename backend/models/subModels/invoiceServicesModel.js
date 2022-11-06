import mongoose from 'mongoose'

const invoiceServicesSchema = new mongoose.Schema(
    {
        sID: String,
        units: Number,
        amount: Number
    }
)

export default invoiceServicesSchema