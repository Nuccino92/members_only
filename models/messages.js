const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Message = mongoose.model(
  "Message",
  new Schema(
    {
      user: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Message;
