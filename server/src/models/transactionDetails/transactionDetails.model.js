import { DataTypes } from "sequelize";
import mssql  from "../../connection/mssql.connection.js";
import { TRANSACTION_DETAILS } from "../../database/dbSchema.js";

export const transactionDetails = mssql.define(TRANSACTION_DETAILS, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tran_id: {
    type: DataTypes.INTEGER,
    field: "tranId",
  },
  details_id: {
    type: DataTypes.INTEGER,
    field: "detailsId",
  },
  debit_ac: {
    type: DataTypes.INTEGER,
    field: "debitAc",
  },
  credit_ac: {
    type: DataTypes.INTEGER,
    field: "creditAc",
  },
  amount: {
    type: DataTypes.DECIMAL(18, 2),
  },
  narration: {
    type: DataTypes.STRING(255),
  },
  drcr: {
    type: DataTypes.CHAR(1),
  },
  da: {
    type: DataTypes.INTEGER,
  },
  ca: {
    type: DataTypes.INTEGER,
  },
});
