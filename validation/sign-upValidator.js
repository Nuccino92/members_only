const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("username")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("User name can not be empty")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Username should be at least 2 characters")
    .bail(),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password can not be empty")
    .bail()
    .isLength({ min: 5 })
    .withMessage("Password should be at least 6 characters")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach((error) => {
        req.flash("error", error.msg);
      });
      res.render("sign-up", {
        showErrors: true,
        errors: res.locals.getMessages().error,
      });
    } else {
      next();
    }
  },
];
//   return res.status(422).json({ errors: errors.array() });
