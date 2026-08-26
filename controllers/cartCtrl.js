const User = require('../models/user.js');
const Product = require('../models/product.js');

const index = async (req, res) => {
  try {
    const user = await User.findById(
      req.session.user._id
    ).populate('cart');

    let total = 0;

    user.cart.forEach((product) => {
      total += product.price;
    });

    res.render('cart/index.ejs', {
      cart: user.cart,
      total,
    });
  } catch (error) {
    console.log(error);

    res.send(
      'Unable to display cart.'
    );
  }
};

const add = async (req, res) => {
  try {
    const user = await User.findById(
      req.session.user._id
    );

    const product = await Product.findById(
      req.params.productId
    );

    user.cart.push(product._id);

    await user.save();

    res.redirect('/cart');
  } catch (error) {
    console.log(error);

    res.send(
      'Unable to add product to cart.'
    );
  }
};

const remove = async (req, res) => {
  try {
    const user = await User.findById(
      req.session.user._id
    );

    user.cart.pull(
      req.params.productId
    );

    await user.save();

    res.redirect('/cart');
  } catch (error) {
    console.log(error);

    res.send(
      'Unable to remove product.'
    );
  }
};

const checkout = async (req, res) => {
  try {
    const user = await User.findById(
      req.session.user._id
    );

    user.cart = [];

    await user.save();

    res.render(
      'cart/success.ejs'
    );
  } catch (error) {
    console.log(error);

    res.send(
      'Unable to checkout.'
    );
  }
};

module.exports = {
  index,
  add,
  remove,
  checkout,
};