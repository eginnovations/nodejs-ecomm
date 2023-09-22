require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const Category = require("./models/category");
var MongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");
const seeder = require("./seedDB");

const app = express();
require("./config/passport");

// mongodb configuration
(async function () {
  await connectDB();
  seeder.init();
})();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

if (process.argv.indexOf('--no-app-trace') === -1) app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(function reqParser(req, res, next) {
//   someHeavyOperation(Math.random() * 10);
//   next();
// });

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'nodejsecomm',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
    //session expires after 3 hours
    cookie: { maxAge: 60 * 1000 * 60 * 3 },
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// global variables across routes
app.use(async function setSessionDetails(req, res, next) {
  try {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    res.locals.currentUser = req.user;
    someHeavyOperation(0.01);

    const categories = await Category.find({}).sort({ title: 1 }).exec();
    res.locals.categories = categories;
    next();

    // Category.find({}).sort({ title: 1 }).exec((err, categories) => {
    //   res.locals.categories = categories;
    //   console.timeEnd('setSessionDetails')
    //   next();
    // });
    // res.locals.categories = [];
    // next();
    // console.timeEnd('setSessionDetails')
  } catch (error) {
    console.log("errorss", error);
    res.redirect("/");
  }
});

function someHeavyOperation(delay) {
  /* block for 10 seconds! */
  const target = Date.now() + (delay * 1000);
  for (; ;) {
    if (Date.now() > target) {
      break;
    }
  }
}

// add breadcrumbs
get_breadcrumbs = function (url) {
  var rtn = [{ name: "Home", url: "/" }],
    acc = "", // accumulative url
    arr = url.substring(1).split("/");

  for (i = 0; i < arr.length; i++) {
    acc = i != arr.length - 1 ? acc + "/" + arr[i] : null;
    rtn[i + 1] = {
      name: arr[i].charAt(0).toUpperCase() + arr[i].slice(1),
      url: acc,
    };
  }
  return rtn;
};

app.use(function getBreadcrumbs(req, res, next) {
  req.breadcrumbs = get_breadcrumbs(req.originalUrl);
  next();
});

//routes config
const indexRouter = require("./routes/index");
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/user");
const pagesRouter = require("./routes/pages");
const offersRouter = require("./routes/offers");
const specialOffersRouter = require("./routes/specialOffers");

app.use("/products", productsRouter);
app.use("/user", usersRouter);
app.use("/pages", pagesRouter);
app.use("/", indexRouter);
app.use("/offers", offersRouter);
app.use("/specialOffers", specialOffersRouter);

// error handler
app.use(function (err, req, res, next) {
  try {
    console.log("handl", err);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  } catch (e) {
    console.log(e);
  }
});

var port = process.env.PORT || 3000;
app.set("port", port);
app.listen(port, () => {
  console.log("Server running at port " + port);
  import('open').then(mod => {
    mod.default('http://localhost:' + port);
  });
});

module.exports = app;