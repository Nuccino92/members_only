const express = require("express");
const router = express.Router();

const logOutController = require("../controllers/log-outController");

router.get("/", logOutController.logOut_Index);

module.exports = router;
