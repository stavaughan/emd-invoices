import mongoose from 'mongoose'

const invoicePaymentsSchema = new mongoose.Schema(
    {
        date: String,
        dateStr: Number,
        amount_paid: Number,
        amount_due: Number,
        status: String,
        method: String,
        methodNo: String
    },
    {
        timestamps: true
    }
)

export default invoicePaymentsSchema