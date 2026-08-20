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

module.exports = {
  index,
  new: newProduct,
  create,
};