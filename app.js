const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const dbuRI = process.env.MONGOOSE_URI;

mongoose.connect(dbuRI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.listen(3000, () => console.log("app listening on port 3000!"));
