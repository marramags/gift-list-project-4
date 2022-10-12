const Recipient = require('../../models/recipient');

async function addGift(req, res) {
    const giftList = await new Recipient(req.body);
    console.log(req.body)
    giftList.save()
    res.json(giftList)
    console.log(`this is the gift list: ${giftList}`)
    // try{
    //     const addGiftList = await Recipient.create(req.body);
    //     // addGiftList.save
    //     res.json(addGiftList)
    //     console.log(req.body)
    // }
    // catch (error) {
    //     res.status(400).json(error);
    // }

}

module.exports = {
    addGift,
}