const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/productsCtrl.js');

router.get('/', productsCtrl.index);

module.exports = router;