const Message = require("../models/messages");

const postMessage_Index = (req, res) => {
  req.user === undefined
    ? res.redirect("/")
    : res.render("post-message", { user: req.user });
};

const postMessage_Post = (req, res) => {
  const { title, message } = req.body;

  console.log();

  const post = new Message({
    user: req.user.username,
    title: title,
    message: message,
  });

  post.save((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
};

module.exports = {
  postMessage_Index,
  postMessage_Post,
};
