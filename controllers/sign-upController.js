const User = require("../models/users");
const { generateHash } = require("../utils/passwords");

const signUp_Index = (req, res) => {
  res.render("sign-up", { showErrors: false, errors: "" });
};

const signUp_post = async (req, res, next) => {
  const { username, password, firstName, lastName } = req.body;

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
        req.flash(
          error.push(["error: there was a problem with your registration "])
        );
      }
      // give sign-up the errors
      res.render("sign-up", {
        showErrors: true,
        errors: error,
      });
    }
    // if no errors render index and pass the user
    else {
      res.render("index", { user: user });
    }
  });
};

module.exports = {
  signUp_Index,
  signUp_post,
};
