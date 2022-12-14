const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftItemSchema = new Schema ({
    item: {
        type: String,
        // trim: true,
        // required:true
    }
    ,
    price: {
        type: Number,
        // trim: true,
    },
    storeLink: {
        type: String,
        // trim: true,
    },
    // bought:{
    //     type: Boolean,
    //     default: false,
    // }
})

const recipientSchema = new Schema ({
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },
    name: {
        type: String,
        // trim: true,
        // required:true
    },
    relationType: {
        type: String,
        enum: ['Family', 'Friend', 'Partner', 'Co-worker', 'Other'],
        // required:true
    }, 
    complete: {
        type: Boolean,
        default: false,
    },
    giftItems: [giftItemSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Recipient', recipientSchema);