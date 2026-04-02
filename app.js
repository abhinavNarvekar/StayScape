require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const flash = require("connect-flash");

const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// MODELS
const User = require("./models/user.js");

// ROUTES
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const bookingRoutes = require("./routes/booking.js");

// UTILS
const ExpressError = require("./utils/ExpressError.js");

// DB
const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
}
main()
  .then(() => console.log("connected to Db"))
  .catch((err) => console.log(err));

// VIEW ENGINE + MIDDLEWARE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

// SESSION STORE
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("Error in mongo session store!", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

// PASSPORT CONFIG
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// GLOBAL LOCALS (VERY IMPORTANT)
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// ROUTES (ORDER MATTERS)
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/listings", bookingRoutes);
app.use("/", userRouter);

// 404 HANDLER
app.use((req, res, next) => {
  next(new ExpressError(404, "Page not Found!"));
});

// ERROR HANDLER
app.use((err, req, res, next) => {
  let { statusCode = 500 } = err;
  let message = err.message || "Something went wrong!";
  res.status(statusCode).render("error.ejs", { err });
});

// SERVER
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
