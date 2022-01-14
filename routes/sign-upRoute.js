const express = require("express");

const { validateUser } = require("../validation/sign-upValidator");

const router = express.Router();

const {
  signUp_Index,
  signUp_post,
} = require("../controllers/sign-upController");

router.get("/", signUp_Index);
router.route("/").post(validateUser, signUp_post);

module.exports = router;
