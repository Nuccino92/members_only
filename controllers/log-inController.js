const passport = require("passport");

const logIn_Index = (req, res) => {
  res.render("log-in");
};

const logIn_Post = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })(req, res, next);
};

module.exports = {
  logIn_Index,
  logIn_Post,
};
