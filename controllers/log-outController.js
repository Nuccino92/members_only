const logOut_Index = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = {
  logOut_Index,
};
