"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
/**
 *   Load environment variables from .env file, where API keys and passwords are configured
 */
dotenv_1["default"].config({ path: ".env" });
exports.env = process.env.NODE_ENV;
exports.port = process.env.PORT;
exports.apiLink = "http://" + process.env.HOST + ":" + process.env.PORT;
exports.basePath = "/api/v1 ";
exports.database = "blockexplorer";
exports.postgre = {
    uri: process.env.NODE_ENV === "test " ? process.env.PGSQL_URI_TESTS : process.env.PGSQL_URI,
    db: process.env.PGSQL_DB,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT,
    username: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASS
};
exports.logs = process.env.NODE_ENV === "production " ? "combined " : "dev";
exports.sentryDsn = process.env.SENTRY_DSN;
