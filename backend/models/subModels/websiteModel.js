import mongoose from 'mongoose'
import getters from '../../lib/getters.js'

const websiteSchema = new mongoose.Schema(
    {
        type: String,
        url: { 
            type: String, 
            set: getters.toLower 
        }
    }
)

export default websiteSchema