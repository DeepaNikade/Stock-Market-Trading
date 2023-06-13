import { Sequelize } from "sequelize";
import { DB_NAME, DB_SERVER, DB_USER, DB_PASSWORD } from "../utils/config.js";
import logger from "../utils/logger.js";

const mssql = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_SERVER,
  logging: (msg, timing) =>
    logger.warn(`Executed query - ${msg} in ${timing} ms`),
  dialect: "mssql",
  define: {
    timestamps: false,
    freezeTableName: true,
    trustedConnection:true,
  },
});

export function connectMssql() {
  mssql
    .authenticate({ logging: false })
    .then(() => {
      logger.info("Sequelize mssql Connected");
    })
    .catch((err) => {
      logger.error(" Unable to connect to the database" +err);
    });
}

export default mssql;
