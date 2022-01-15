const express = require("express");
const {
  postMessage_Index,
  postMessage_Post,
} = require("../controllers/post-messageController");

const router = express.Router();

router.get("/", postMessage_Index);
router.post("/", postMessage_Post);

module.exports = router;
