const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema({
    username: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
      minlength: [2, "Name should be longer than 5 characters"],
      maxlength: [18, "Name should be shorter than 19 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password should be longer than 5 characters"],
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    membership: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = User;
