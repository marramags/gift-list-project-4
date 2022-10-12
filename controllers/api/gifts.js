const Recipient = require('../../models/recipient');

async function addGift(req, res) {

    const giftList = await new Recipient(req.body);
    // Recipient.giftItems.push( 
    //     { 
    //        item: req.body.item,  
    //        description: req.body.description,
    //        storeLink: req.body.storeLink,
    //        bought: req.body.bought
    //     });
    
    console.log(`this is the req.body: ${req.body}`)
    giftList.save()
    res.json(giftList)
    console.log(`this is the gift list: ${giftList}`)
    // try{
    //     const addGiftList = await Recipient.create(req.body);
    //     addGiftList.save
    //     // Recipient.giftItems.push({req.body})
    //     console.log(addGiftList)
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