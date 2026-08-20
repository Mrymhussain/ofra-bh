const express = require('express');
const router = express.Router();

const productsCtrl = require('../controllers/productsCtrl.js');
const isSignedIn = require('../middleware/isSignedIn.js');

router.get('/', productsCtrl.index);
router.get('/new', isSignedIn, productsCtrl.new);
router.post('/', isSignedIn, productsCtrl.create);
router.get('/:productId', productsCtrl.show);

module.exports = router;