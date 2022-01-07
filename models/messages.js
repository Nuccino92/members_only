const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Message = mongoose.model(
  "Message",
  new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
  }),
  { timestamps: true }
);
