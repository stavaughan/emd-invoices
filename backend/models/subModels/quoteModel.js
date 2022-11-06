import mongoose from 'mongoose'

const quoteSchema = new mongoose.Schema(
    {
        pageIDs: [String],
        quote: String,
        cite: String
    }
)

export default quoteSchema