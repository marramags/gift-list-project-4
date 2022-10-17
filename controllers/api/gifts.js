const Recipient = require('../../models/recipient');

async function addGift(req, res) { //create recipient and gift
    const giftList = await new Recipient(req.body);
    giftList.giftItems.push( 
        { 
           item: req.body.item,
           price: req.body.price,
           description: req.body.description,
           storeLink: req.body.storeLink,
        //    bought: req.body.bought
        });
    giftList.save()
    res.json(giftList)

}

async function getAll(req, res) {
    const getGiftList = await Recipient.find({})
    res.json(getGiftList)
  }

  async function deleteOne(req,res) {
    const deleteGift = await Recipient.findByIdAndDelete(req.params.id)
    res.json(deleteGift)
}

async function completeGifts(req, res){
    //how to find the recipient in the form (pass the user id)
    const checkedGifts = await Recipient.findById(req.params.id);
    checkedGifts.complete = req.complete
    await checkedGifts.save()
    res.json(checkedGifts)
}



module.exports = {
    addGift,
    getAll,
    deleteOne,
    completeGifts,
}