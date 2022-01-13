const express = require("express");
const router = express.Router();
const passport = require("passport");

const { logIn_Index, logIn_Post } = require("../controllers/log-inController");

router.get("/", logIn_Index);
router.post("/", logIn_Post);

module.exports = router;
