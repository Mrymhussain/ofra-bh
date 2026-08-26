const isAdmin = (req, res, next) => {
  if (
    req.session.user &&
    req.session.user.isAdmin
  ) {
    return next();
  }

  res.send('Access denied.');
};

module.exports = isAdmin;