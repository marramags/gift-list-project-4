const Recipient = require('../../models/recipient');

async function addGift(req, res) {
    // const giftList = await new Recipient.req.body._id;
    // giftList.save()
    // res.json(giftList)
    try{
        const addGiftList = await Recipient.create(req.body);
        // addGiftList.save
        res.json(addGiftList)
        console.log(req.body)
    }
    catch (error) {
        res.status(400).json(error);
    }

}

module.exports = {
    addGift,
}