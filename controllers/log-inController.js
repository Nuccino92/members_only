const passport = require("passport");

const logIn_Index = (req, res) => {
  const flashMessages = res.locals.getMessages();

  if (flashMessages.error) {
    res.render("log-in", {
      showErrors: true,
      errors: flashMessages.error,
    });
  } else {
    res.render("log-in", { showErrors: false });
  }

  res.render("log-in", { showErrors: false });
};

const logIn_Post = (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
    failureFlash: true,
  })(req, res, next);
};

module.exports = {
  logIn_Index,
  logIn_Post,
};
