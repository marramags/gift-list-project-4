const express = require('express');
const router = express.Router();
const giftsCtrl = require('../../controllers/api/gifts')

//POST http://localhost:3001/api/giftlist/
router.post('/', giftsCtrl.addGift);

module.exports = router;
