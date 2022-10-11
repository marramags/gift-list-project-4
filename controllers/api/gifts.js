const Recipient = require('../../models/recipient');

async function addGift(req, res) {
    const giftList = await Recipient.req.body._id;
    res.json(giftList)
}