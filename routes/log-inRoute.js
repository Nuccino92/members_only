const express = require("express");
const router = express.Router();
const passport = require("passport");

const logInController = require("../controllers/log-inController");

router.get("/", logInController.logIn_Index);
router.post("/", logInController.logIn_Post);

module.exports = router;
