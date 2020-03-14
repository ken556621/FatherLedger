const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
const app = express();
const cors = require('cors');
const flash = require("connect-flash");
const port = 3000;

if (process.env.NODE_ENV !== "production") {      
    require("dotenv").config()                     
}

app.engine("handlebars", exphbs({ defaultLayout:"main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(flash());
app.use(cors());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/account", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;

db.on("error", () => {
    console.log("Mongodb error");
})

db.once("open", () => {
    console.log("Mongodb connect")
})

//使用session
app.use(session({
    secret: "My secret",
    resave: false,
    saveUninitialized: true
}))

//啟動 passport
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//將訊息透過 res.locals 交給 views
app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.success_msg = req.flash("success_msg");
    res.locals.warning_msg = req.flash("warning_msg");
    next();
})

//public file
app.use(express.static("public"));

//Router
app.use("/", require("./routes/home"));
app.use("/account", require("./routes/account"));
app.use("/chart", require("./routes/chart"));
app.use("/users", require("./routes/user"));
app.use("/auth", require("./routes/auth"));


app.listen(process.env.PORT || port, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT || port}`);
})