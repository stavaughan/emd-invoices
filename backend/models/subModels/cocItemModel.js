import mongoose from 'mongoose'

const cocItemSchema = new mongoose.Schema(
    {
        groupID: String,
        label: String,
        itemID: String,
        icon: String,
        accountID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account'
        }
    }
)

export default cocItemSchema