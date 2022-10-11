const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftItemSchema = new Schema ({
    item: {
        type: String,
        required:true
    },
    description: {
        type: String
    },
    storeLink: {
        type: String
    }
})

const recipientSchema = new Schema ({
    name: {
        type: String,
        required:true
    },
    relationType: {
        type: String,
        enum: ['Family', 'Friend', 'Work', 'Other'],
        required:true
    }, 
    giftItems: [giftItemSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Recipient', recipientSchema);