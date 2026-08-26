const Product = require('../models/product.js');

const index = async (req, res) => {
  try {
    const products = await Product.find({});

    res.render(
      'products/index.ejs',
      { products }
    );
  } catch (error) {
    console.log(error);
    res.send('Unable to display products.');
  }
};

const categories = (req, res) => {
  res.render('products/categories.ejs');
};

const category = async (req, res) => {
  try {
    let categoryName;

    if (
      req.params.categoryName ===
      'highlighter'
    ) {
      categoryName = 'Highlighter';
    } else if (
      req.params.categoryName ===
      'lipstick'
    ) {
      categoryName = 'Lipstick';
    } else if (
      req.params.categoryName ===
      'skincare'
    ) {
      categoryName = 'Skin Care';
    } else {
      return res.send(
        'Category not found.'
      );
    }

    const products = await Product.find({
      category: categoryName,
    });

    res.render(
      'products/category.ejs',
      {
        products,
        categoryName,
      }
    );
  } catch (error) {
    console.log(error);
    res.send(
      'Unable to display category.'
    );
  }
};

const newProduct = (req, res) => {
  res.render('products/new.ejs');
};

const create = async (req, res) => {
  try {
    req.body.owner =
      req.session.user._id;

    const product =
      await Product.create(req.body);

    if (
      product.category ===
      'Highlighter'
    ) {
      return res.redirect(
        '/products/category/highlighter'
      );
    }

    if (
      product.category ===
      'Lipstick'
    ) {
      return res.redirect(
        '/products/category/lipstick'
      );
    }

    if (
      product.category ===
      'Skin Care'
    ) {
      return res.redirect(
        '/products/category/skincare'
      );
    }

    res.redirect(
      '/products/categories'
    );
  } catch (error) {
    console.log(error);
    res.send(
      'Unable to create product.'
    );
  }
};

const show = async (req, res) => {
  try {
    const product =
      await Product.findById(
        req.params.productId
      );

    let categoryPath;

    if (
      product.category ===
      'Highlighter'
    ) {
      categoryPath = 'highlighter';
    } else if (
      product.category ===
      'Lipstick'
    ) {
      categoryPath = 'lipstick';
    } else {
      categoryPath = 'skincare';
    }

    res.render(
      'products/show.ejs',
      {
        product,
        categoryPath,
      }
    );
  } catch (error) {
    console.log(error);
    res.send(
      'Unable to display product.'
    );
  }
};

const edit = async (req, res) => {
  try {
    const product =
      await Product.findById(
        req.params.productId
      );

    res.render(
      'products/edit.ejs',
      { product }
    );
  } catch (error) {
    console.log(error);
    res.send(
      'Unable to edit product.'
    );
  }
};

const update = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(
      req.params.productId,
      req.body
    );

    res.redirect(
      `/products/${req.params.productId}`
    );
  } catch (error) {
    console.log(error);
    res.send(
      'Unable to update product.'
    );
  }
};

const deleteProduct = async (
  req,
  res
) => {
  try {
    await Product.findByIdAndDelete(
      req.params.productId
    );

    res.redirect(
      '/products/categories'
    );
  } catch (error) {
    console.log(error);
    res.send(
      'Unable to delete product.'
    );
  }
};

module.exports = {
  index,
  categories,
  category,
  new: newProduct,
  create,
  show,
  edit,
  update,
  deleteProduct,
};