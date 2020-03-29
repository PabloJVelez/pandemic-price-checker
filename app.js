var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index");
var exphbs = require("express-handlebars");

var app = express();

// view engine setup
app.engine(
  "hbs",
  exphbs({
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
    defaultLayout: "main",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);

module.exports = app;
