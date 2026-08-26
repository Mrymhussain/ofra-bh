const express = require('express');
const router = express.Router();

const productsCtrl = require(
  '../controllers/productsCtrl.js'
);

const isSignedIn = require(
  '../middleware/isSignedIn.js'
);

const isAdmin = require(
  '../middleware/isAdmin.js'
);

router.get(
  '/',
  productsCtrl.index
);

router.get(
  '/categories',
  productsCtrl.categories
);

router.get(
  '/category/:categoryName',
  productsCtrl.category
);

router.get(
  '/new',
  isSignedIn,
  isAdmin,
  productsCtrl.new
);

router.post(
  '/',
  isSignedIn,
  isAdmin,
  productsCtrl.create
);

router.get(
  '/:productId/edit',
  isSignedIn,
  isAdmin,
  productsCtrl.edit
);

router.put(
  '/:productId',
  isSignedIn,
  isAdmin,
  productsCtrl.update
);

router.delete(
  '/:productId',
  isSignedIn,
  isAdmin,
  productsCtrl.deleteProduct
);

router.get(
  '/:productId',
  productsCtrl.show
);

module.exports = router;