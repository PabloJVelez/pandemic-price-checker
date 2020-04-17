var express = require("express");
var path = require("path");
var exphbs = require("express-handlebars");

global["XMLHttpRequest"] = require("xmlhttprequest").XMLHttpRequest;

// cors
var cors = require("cors");

// routes
var indexRouter = require("./routes/index");
var loginRouter = require("./routes/login");
var priceChartRouter = require("./routes/priceChart");
var signupRouter = require("./routes/signup");
var usersRouter = require("./routes/users");

var app = express();

// cors setup
app.use(cors());

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// view engine setup
app.engine(
  "hbs",
  exphbs({
    layoutsDir: "views/layouts",
    partialsDir: "views/partials",
    defaultLayout: "main",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// routes setup
app.use("/", indexRouter);
app.use(loginRouter);
app.use(signupRouter);
app.use(priceChartRouter);
app.use(usersRouter);

module.exports = app;
