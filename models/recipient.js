const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftItemSchema = new Schema ({
    item: {
        type: String,
        trim: true,
        required:true
    },
    description: {
        type: String,
        trim: true,
    },
    storeLink: {
        type: String,
        trim: true,
    }
})

const recipientSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required:true
    },
    relationType: {
        type: String,
        enum: ['Family', 'Friend', 'Partner', 'Co-worker', 'Other'],
        required:true
    }, 
    giftItems: [giftItemSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Recipient', recipientSchema);