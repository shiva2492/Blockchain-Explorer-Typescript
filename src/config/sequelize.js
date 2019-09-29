"use strict";
exports.__esModule = true;
var sequelize_typescript_1 = require("sequelize-typescript");
var block_model_1 = require("../api/models/block.model");
var blockinfo_model_1 = require("../api/models/blockinfo.model");
var path_1 = require("path");
console.log("__dirname", path_1["default"].join(__dirname + "../api/models/*.model.ts"));
var sequelize = new sequelize_typescript_1.Sequelize({
    database: "blockexplorer",
    dialect: "postgres",
    username: "postgres",
    password: "password",
    storage: ":memory:",
    logging: false
});
sequelize.addModels([block_model_1.Block, blockinfo_model_1.BlockInfo]);
exports["default"] = sequelize;
