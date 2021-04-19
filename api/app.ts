import express, { NextFunction } from "express";
import createError from "http-errors";
import path from "path";
import cookieParser = require("cookie-parser");
import logger = require("morgan");
import rfs = require('rotating-file-stream') 
import cors = require("cors");

import indexRouter = require("./routes/index");
import plantData = require("./routes/plantData");
import realtime = require("./routes/realtime");

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
        interval: '1d', // rotate daily
        path: path.join(__dirname, 'log')
    })
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
app.use((req: any, res: any , next: any) => {
    next(createError(404));
});

// error handler
app.use((err: any, req: any, res: any, next: any) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

export = app;
