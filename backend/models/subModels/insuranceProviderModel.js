import mongoose from 'mongoose'

const insuranceProviderSchema = new mongoose.Schema(
    {
        label: String,
        venID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor'            
        },
        Type: String,
        'Plan name': String,
        Insured: String,
        'Member ID': String,
        'Policy Number': String,
        Codes: {
            label: String,
            RxBin: String,
            RxPCN: String,
            RxGroup: String,
            RxGroup_notes: String,
            issuer_80840: String
        },
        contacts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contact'
        }]
    }
)

export default insuranceProviderSchema