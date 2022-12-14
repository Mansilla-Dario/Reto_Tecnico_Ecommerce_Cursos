import Sequelize from "sequelize";
import {db} from "../config.js";


export const sequelize = new Sequelize(db.dbName,db.user,db.password, {
  host: db.host,
  dialect: db.dialect,
  
});