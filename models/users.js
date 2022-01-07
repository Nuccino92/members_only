const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fireName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    membership: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = User;
