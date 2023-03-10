import mongoose from 'mongoose'
import invoicePaymentsSchema from '../subModels/invoicePaymentsModel.js'
import invoiceServicesSchema from '../subModels/invoiceServicesModel.js'

const invoiceSchema = new mongoose.Schema(
    {
        number: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        dateCreated: {
            type: Number,
            default: Date.now()
        },
        dateSent: {
            type: Number,
            default: null
        },
        dateDue: String, 
        paymentTerms: String,
        hasImage: Boolean,
        clientID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Customer'
        },
        contrID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Business'
        },
        priceType: {
            type: String,
            required: true,
            enum: ['job', 'product']
        },
        taxRate: {
            type: Number,
            default: 0
        },
        invoicePrice: {
            type: Number,
            required: true
        },
        sentStatus: {
            type: String,
            default: 'noSent'
        },
        paidStatus: {
            type: String,
            default: 'Not Paid'
        },
        payments: [invoicePaymentsSchema],
        rendered_services: [invoiceServicesSchema]
    },
    {
        timestamps: true
    }
)

const Invoice = mongoose.model('Invoice', invoiceSchema, 'invoices')

export default Invoice