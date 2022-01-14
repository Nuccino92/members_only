const express = require("express");
const { postMessage_Index } = require("../controllers/post-messageController");

const router = express.Router();

router.get("/", postMessage_Index);

module.exports = router;
