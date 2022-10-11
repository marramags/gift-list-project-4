const express = require('express');
const router = express.Router();

//POST http://localhost:3001/api/giftlist/add
router.post('/addgift', giftsCtrl.addGift);