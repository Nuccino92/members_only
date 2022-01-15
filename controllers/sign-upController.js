const User = require("../models/users");
const { generateHash } = require("../utils/passwords");

const signUp_Index = (req, res) => {
  res.render("sign-up", { showErrors: false, errors: "" });
};

const signUp_post = async (req, res, next) => {
  const { username, password, password2, firstName, lastName } = req.body;
  if (password === password2) {
    // create a user
    const user = new User({
      username,
      // use generate hash function to hide password
      password: generateHash(password),
      firstName,
      lastName,
      membership: false,
    });

    // save created user
    user.save((err) => {
      let error = [];
      // check for mongo errors
      if (err) {
        // check for unique error code
        if (err.code === 11000) {
          req.flash(error.push(["Username already exists"]));
        } else {
          // any other error
          req.flash(error.push([err._message]));
        }
        // give sign-up the errors
        res.render("sign-up", {
          showErrors: true,
          errors: error,
        });
      }
      // if no errors render index and pass the user
      else {
        res.redirect("log-in");
      }
    });
  } else {
    let error = [];
    req.flash(error.push(["Passwords do not match"]));
    res.render("sign-up", {
      showErrors: true,
      errors: error,
    });
  }
};

module.exports = {
  signUp_Index,
  signUp_post,
};
