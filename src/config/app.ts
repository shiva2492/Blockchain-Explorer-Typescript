
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import lusca from "lusca";
import routes from "../api/routes/index";
import expressValidator from "express-validator";
import {
    logs,
    env
} from "./vars";
import HandleError from "../api/middlewares/error";
import cors from "cors";

/**
 * Express instance
 * @public
 */
const app = express();
app.set("port", env || 3000);
// request logging. dev: console | production: file
app.use(morgan(logs));

// allow cross origin requests
app.use(cors());

app.use(require("express-session")({
    secret: "bounty_secret",
    resave: true,
    saveUninitialized: true,
}));


// parse body params and attache them to req.body
app.use(bodyParser.json({
    limit: "100mb",
}));

app.use(bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 100000,
}));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.disable("x-powered-by");

// mount api v1 routes
app.use("/api/v1", routes);

// if error is not an instanceOf APIError, convert it.
app.use(HandleError.converter);

// catch 404 and forward to error handler
app.use(HandleError.notFound);


export default app;
