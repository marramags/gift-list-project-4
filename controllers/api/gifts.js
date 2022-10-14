const Recipient = require('../../models/recipient');

async function addGift(req, res) { //create recipient and gift
    const giftList = await new Recipient(req.body);
    // console.log(req.body)
    console.log(giftList)

    console.log(`EVERYTHING! ${req.body}`)
    giftList.giftItems.push( 
        { 
           item: req.body.item,
           description: req.body.description,
           storeLink: req.body.storeLink,
        //    bought: req.body.bought
        });
    
    console.log(`this is the req.body for item: ${req.body.item}`)

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

async function getAll(req, res) {
    const getGiftList = await Recipient.find({})
    res.json(getGiftList)
    // console.log(`GET ALL${getGiftList}`)
  }

  async function deleteOne(req,res) {
    // try{
    // const giftList = await Recipient.findByIdAndDelete(req.body)
    // console.log(req.body)
    // res.json(giftList)
    // }
    // catch(error){
    //     res.status(400).json(error);
    //     console.log('Try deleting again')
    // }
    // console.log(`user: ${req.user._id}`)
    // console.log(`_id: ${req.params.id}`)
    const deleteGift = await Recipient.findByIdAndDelete(req.params.id)
    // const deleteGift = await Recipient.findOneAndDelete(req.body)
    // const deleteGift = await Recipient.findOneAndDelete(req.params.id)

    // await Recipient.findByIdAndDelete({user: req.user._id})
    // console.log(`_id: ${req.params.id}`)
    console.log(`req.body: ${req.body}`)
    // console.log(`delete: ${deleteGift}`)
     // console.log(`_id: ${req.params.id}`)
    // await Recipient.findByIdAndDelete({_id: req.params.id, user: req.user._id})
    res.json(deleteGift)
}

async function completeGifts(req, res){
    // const checkedGifts = await Recipient.findByIdAndUpdate(id);
    // const checkedGifts = await Recipient.findByIdAndUpdate(req.user.body);
    const checkedGifts = await Recipient.findOneAndUpdate(req.user.body);

    //assign checkedGifts is true
    // req..body.___ is true
    res.json(checkedGifts)
}



module.exports = {
    addGift,
    getAll,
    deleteOne,
    completeGifts,
}