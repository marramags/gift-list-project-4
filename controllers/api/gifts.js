const Recipient = require('../../models/recipient');

async function addGift(req, res) {
    const giftList = await new Recipient(req.body);
    console.log(`this is the req.body: ${req.body}`)
    giftList.save()
    res.json(giftList)
    console.log(`this is the gift list: ${giftList}`)
    // try{
    //     const addGiftList = await Recipient.create(req.body);
    //     // addGiftList.save
    //     console.log(req.body)
    //     res.json(addGiftList)
    //     console.log(`this is the gift list: ${addGiftList}`)

    // }
    // catch (error) {
    //     res.status(400).json(error);
    // }

}

module.exports = {
    addGift,
}