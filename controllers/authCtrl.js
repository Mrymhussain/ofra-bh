
const bcrypt = require('bcrypt');
const User = require('../models/user');

const SALT_ROUDS = 10;

const signup = async (req, res) => {
  res.render('auth/sign-up.ejs');
};

const register = async (req, res) => {
  try {
    // verify if username already exists
    const userInDatabase = await User.findOne({
      username: req.body.username,
    });

    if (userInDatabase) {
      return res.send('Invalid input');
    }

    // check if passwords match
    if (
      req.body.password !==
      req.body.confirmPassword
    ) {
      return res.send('Invalid input');
    }

    // encrypt password
    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      SALT_ROUDS
    );

    req.body.password = hashedPassword;

    // every registered user is a normal user
    req.body.isAdmin = false;

    const user = await User.create(req.body);

    req.session.user = {
      username: user.username,
      _id: user._id,
      isAdmin: user.isAdmin,
    };

    req.session.save(() => {
      res.redirect('/');
    });
  } catch (err) {
    console.log(err);
    res.send('something went wrong');
  }
};

const signin = async (req, res) => {
  res.render('auth/sign-in.ejs');
};

const login = async (req, res) => {
  const userInDatabase = await User.findOne({
    username: req.body.username,
  });

  if (!userInDatabase) {
    return res.send('Invalid credentials');
  }

  if (
    !bcrypt.compareSync(
      req.body.password,
      userInDatabase.password
    )
  ) {
    return res.send('Invalid credentials');
  }

  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id,
    isAdmin: userInDatabase.isAdmin,
  };

  req.session.save(() => {
    res.redirect('/');
  });
};

const signout = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

module.exports = {
  signup,
  register,
  signin,
  login,
  signout,
};