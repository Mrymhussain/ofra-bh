const express = require('express');
const router = express.Router();

const cartCtrl = require(
  '../controllers/cartCtrl.js'
);

const isSignedIn = require(
  '../middleware/isSignedIn.js'
);

const isCustomer = require(
  '../middleware/isCustomer.js'
);

router.get(
  '/',
  isSignedIn,
  isCustomer,
  cartCtrl.index
);

router.post(
  '/checkout',
  isSignedIn,
  isCustomer,
  cartCtrl.checkout
);

router.post(
  '/:productId',
  isSignedIn,
  isCustomer,
  cartCtrl.add
);

router.delete(
  '/:productId',
  isSignedIn,
  isCustomer,
  cartCtrl.remove
);

module.exports = router;