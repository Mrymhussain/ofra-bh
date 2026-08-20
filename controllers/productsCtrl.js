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

module.exports = {
  index,
};