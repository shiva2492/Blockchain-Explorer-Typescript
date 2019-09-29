import { Sequelize } from "sequelize-typescript";
import { Block } from "../api/models/block.model";
import { BlockInfo } from "../api/models/blockinfo.model";

import path from "path";

console.log("__dirname", path.join(__dirname + "../api/models/*.model.ts"));

const sequelize = new Sequelize({
    database: "blockexplorer",
    dialect: "postgres",
    username: "postgres",
    password: "password",
    storage: ":memory:",
    
});

sequelize.addModels([Block,BlockInfo]);


export default sequelize;

