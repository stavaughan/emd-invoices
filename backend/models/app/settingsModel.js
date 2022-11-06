import mongoose from 'mongoose'
import quoteSchema from '../subModels/quoteModel.js'
import socialSchema from '../subModels/socialModel.js'
import getters from '../../lib/getters.js'

const settingsSchema = new mongoose.Schema(
    {
        siteName: String,
        copyRight: {
            link: {
                type: String,
                required: true,
                set: getters.toLower
            },
            label: {
                type: String,
                required: true
            }
        },
        appType: {
            type: String,
            enum: [
                'guardianship-elder',
                'guardianship-minor',
                'organization',
                'personal',
                'business',
                'other'
            ]
        },
        siteBranding: {
            brand: {
                type: String,
                required: true
            },
            logo: {
                type: String,
                required: true
            }
        },
        quoteData: [quoteSchema],
        social: [socialSchema],
        developer: {
            name: {
                type: String,
                required: true
            },
            subName: String,
            url: {
                type: String,
                set: getters.toLower
            }
        },
        siteData: Object
    },
    {
        timestamps: true
    }
)

const Settings = mongoose.model('Setting', settingsSchema, 'app-settings')

export default Settings
