const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("express-flash-messages");
const localStrategy = require("passport-local").Strategy;
const passwordUtils = require("./utils/passwords");

const User = require("./models/users");

require("dotenv").config();

const logInRoute = require("./routes/log-inRoute");
const signUpRoute = require("./routes/sign-upRoute");
const logOutRoute = require("./routes/log-outRoute");

const dbuRI = process.env.MONGOOSE_URI;

mongoose.connect(dbuRI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();

app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

app.use(passport.initialize());

passport.use(
  new localStrategy((username, password, done) => {
    User.findOne(
      { username: new RegExp("^" + username + "$", "i") },
      (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, {
            message: "The information you entered was incorrect",
          });
        }

        if (!passwordUtils.compareHash(password, user.password)) {
          return done(null, false, {
            message: "The information you entered was incorrect",
          });
        }

        return done(null, user);
      }
    );
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.use(express.static("public"));

// passport
app.use(passport.session());
app.use(flash());

// handle post bodies
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.render("index", { user: req.user }));
app.use("/log-in", logInRoute);
app.use("/sign-up", signUpRoute);
app.use("/log-out", logOutRoute);

app.use((req, res) => {
  res.status(404).render("error");
});

app.listen(3000, () => console.log("app listening on port 3000!"));

module.exports = {
  db,
};
