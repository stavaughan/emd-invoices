import mongoose from 'mongoose'
import cocItemSchema from './cocItemModel.js'

const cocSubAccountSchema = new mongoose.Schema(
    {
        catID: String,
        label: String,
        itemID: String,
        accounts: [cocItemSchema]
    }
)

export default cocSubAccountSchema