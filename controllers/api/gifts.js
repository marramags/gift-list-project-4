const Recipient = require('../../models/recipient');
// const Gift = require('../../models/gift');

async function getAll(req, res) {
    const yourownvariable = await Recipient.find({})
    res.json(yourownvariable)
  
  }

async function addRecipient(req, res) { //create recipient and gift
   
    const recipientList = await new Recipient(req.body);

    // Recipient.giftItems.push( 
    //     { 
    //        item: req.body.giftItems.item,  
    //        description: req.body.giftItems.description,
    //        storeLink: req.body.giftItems.storeLink,
    //        bought: req.body.giftItems.bought
    //     });
    
    console.log(`this is the Recipient req.body: ${req.body}`)

    recipientList.save()
    res.json(recipientList)
    console.log(`this is the recipient list: ${recipientList}`)
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

// async function addGift(req, res) { //create recipient and gift
//     const giftList = await new Gift(req.body);

//     // Recipient.giftItems.push( 
//     //     { 
//     //        item: req.body.giftItems.item,  
//     //        description: req.body.giftItems.description,
//     //        storeLink: req.body.giftItems.storeLink,
//     //        bought: req.body.giftItems.bought
//     //     });
    
//     console.log(`this is the Gift req.body: ${req.body}`)

//     giftList.save()
//     res.json(giftList)
//     console.log(`this is the gift list: ${giftList}`)

//     // const rList = await Recipient.findById(req.body.rListId);
//     // console.log(`testing rList${rList}`)
//     // rList.Gift.push(req.body);
//     // await rList.save();
//     // res.json(rList);
//     // console.log(`testing rList${rList}`)
// }

// shows all GET FindAll

module.exports = {
    // addGift,
    getAll,
    addRecipient,
}