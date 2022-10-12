const Recipient = require('../../models/recipient');

// async function addGift(req, res) {
//     const giftList = await new Recipient(req.body);
//     console.log(`this is the req.body: ${req.body}`)
//     giftList.save()
//     res.json(giftList)
//     console.log(`this is the gift list: ${giftList}`)
//     // try{
//     //     const addGiftList = await Recipient.create(req.body);
//     //     // addGiftList.save
//     //     console.log(req.body)
//     //     res.json(addGiftList)
//     //     console.log(`this is the gift list: ${addGiftList}`)

//     // }
//     // catch (error) {
//     //     res.status(400).json(error);
//     // }

// }

async function addRecipient(req, res) {
    const recipientList = await new Recipient(req.body);
    console.log(`this is the req.body: ${req.body}`)
    recipientList.save()
    res.json(recipientList)
    console.log(`this is the gift list: ${recipientList}`)
}

async function addGift(req, res) {
    const rList = await Recipient.findById(req.body.rListId);
    rList.giftItems.push(req.body);
    await rList.save();
    res.json(rList);
}

module.exports = {
    addGift,
    addRecipient,
}