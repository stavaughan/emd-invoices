import mongoose from 'mongoose'

const checklistItemSchema = new mongoose.Schema(
    {
        userID: {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        groupID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CheckListGroup'
        },
        label: String,
        order: Number,
        description: String,
        bulletPoints: [String],
        optional: {
            type: Boolean,
            default: false
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'low'
        },
    },
    {
        timestamps: true
    }
)

export default checklistItemSchema
