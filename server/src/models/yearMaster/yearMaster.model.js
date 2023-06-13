import { DataTypes } from "sequelize";
import mssql from "../../connection/mssql.connection.js";
import { YEAR_MASTER } from "../../database/dbSchema.js";

export const yearMaster = mssql.define(YEAR_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  from_date: {
    type: DataTypes.DATEONLY,
    field: "fromDate",
  },
  to_date: {
    type: DataTypes.DATEONLY,
    field: "toDate",
  },
});
