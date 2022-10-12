const recipient = require('../../models/recipient');
const Recipient = require('../../models/recipient');

async function addGift(req, res) { //create recipient and gift
    const giftList = await new Recipient(req.body);
    let test1 = [];
    recipient.giftItems.forEach((g) => {
        test1.push(g)
        console.log(g)
    })

    // Recipient.giftItems.push( 
    //     { 
    //        item: req.body.giftItems.item,  
    //        description: req.body.giftItems.description,
    //        storeLink: req.body.giftItems.storeLink,
    //        bought: req.body.giftItems.bought
    //     });
    
    console.log(`this is the req.body: ${req.body.giftItems}`)

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