const Message = require("../models/messages");

const postMessage_Index = (req, res) => {
  req.user === undefined
    ? res.redirect("/")
    : res.render("post-message", { user: req.user });
};

// const postMessage_Post = (req, res) => {

// }

module.exports = {
  postMessage_Index,
};
