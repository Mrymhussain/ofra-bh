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

const edit = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (product.owner.toString() !== req.session.user._id.toString()) {
      return res.send('You cannot edit this product.');
    }

    res.render('products/edit.ejs', {
      product,
    });
  } catch (error) {
    console.log(error);
    res.send('Unable to edit product.');
  }
};

const update = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (product.owner.toString() !== req.session.user._id.toString()) {
      return res.send('You cannot update this product.');
    }

    await Product.findByIdAndUpdate(req.params.productId, req.body);

    res.redirect(`/products/${req.params.productId}`);
  } catch (error) {
    console.log(error);
    res.send('Unable to update product.');
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (product.owner.toString() !== req.session.user._id.toString()) {
      return res.send('You cannot delete this product.');
    }

    await Product.findByIdAndDelete(req.params.productId);

    res.redirect('/products');
  } catch (error) {
    console.log(error);
    res.send('Unable to delete product.');
  }
};

module.exports = {
  index,
  new: newProduct,
  create,
  show,
  edit,
  update,
  deleteProduct,
};