import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema(
    {
        _sID: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: String,
        priceType: {
            type: String,
            required: true
        },
        unit_price: {
            type: Number,
            required: true
        },
        pid: String
    },
    {
        timestamps: true
    }
)

const Service = mongoose.model('Service', serviceSchema, 'services')

export default Service
