const passwordUtils = require("../utils/passwords");

const User = require("../models/users");

const signUp_Index = (req, res) => {
  res.render("sign-up");
};

const signUp_post = (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: passwordUtils.generateHash(req.body.password),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    membership: false,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    return next(err);
  });
  res.redirect("/");
};

module.exports = {
  signUp_Index,
  signUp_post,
};
