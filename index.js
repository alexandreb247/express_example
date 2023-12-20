const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/1-express");


const User = require('./app/models/UserModel')

const userController = require('./app/controllers/userController')


app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get('/users', userController.index)


app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
