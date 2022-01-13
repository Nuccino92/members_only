const express = require("express");
const { body } = require("express-validator");
const { validateUser } = require("../validation/sign-upValidator");

const router = express.Router();

const signUpController = require("../controllers/sign-upController");

router.get("/", signUpController.signUp_Index);
router.route("/").post(validateUser, signUpController.signUp_post);

module.exports = router;
