"use strict";
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const rfs = require('rotating-file-stream');
const cors = require("cors");
const indexRouter = require("./routes/index");
const plantData = require("./routes/plantData");
const realtime = require("./routes/realtime");
const app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
// add cors
app.use(cors());
// setup the logger
if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
}
if (process.env.NODE_ENV === "production") {
    // create a rotating write stream
    var accessLogStream = rfs.createStream('access.log', {
        interval: '1d',
        path: path.join(__dirname, 'log')
    });
    app.use(logger("combined", { stream: accessLogStream }));
}
// process different data types
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// routes
app.use("/", indexRouter);
app.use("/plantData", plantData);
app.use("/realtime", realtime);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
module.exports = app;
