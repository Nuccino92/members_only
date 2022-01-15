const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("username")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("User name can not be empty")
    .bail()
    .isLength({ min: 2, max: 18 })
    .withMessage("Enter username between ")
    .bail(),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password can not be empty")
    .bail()
    .isLength({ min: 5, max: 25 })
    .withMessage("Enter password between 5-25 characters")
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
