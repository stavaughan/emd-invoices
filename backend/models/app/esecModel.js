import mongoose from 'mongoose'

const esecSchema = new mongoose.Schema(
    {
        iv: String,
        dataString: String
    },
    {
        timestamps: true
    }
)

const Esec = mongoose.model('Esec', esecSchema, 'esec')

export default Esec
