const Product = require('../models/product.js');

const index = async (req, res) => {
  try {
    const products = await Product.find({});

    res.render('products/index.ejs', {
      products,
    });
  } catch (error) {
    console.log(error);
    res.send('Unable to display products.');
  }
};

const newProduct = (req, res) => {
  res.render('products/new.ejs');
};

const create = async (req, res) => {
  try {
    req.body.owner = req.session.user._id;

    await Product.create(req.body);

    res.redirect('/products');
  } catch (error) {
    console.log(error);
    res.send('Unable to create product.');
  }
};

const show = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    let isOwner = false;

    if (req.session.user) {
      isOwner = product.owner.toString() === req.session.user._id.toString();
    }

    res.render('products/show.ejs', {
      product,
      isOwner,
    });
  } catch (error) {
    console.log(error);
    res.send('Unable to display product.');
  }
};

module.exports = {
  index,
  new: newProduct,
  create,
  show,
};