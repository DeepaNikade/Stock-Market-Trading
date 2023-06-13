import { DataTypes } from "sequelize";
import mssql from "../../connection/mssql.connection.js";
import { TRANSACTION_HEAD } from "../../database/dbSchema.js";

export const transactionHead = mssql.define(TRANSACTION_HEAD, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tran_type: {
    type: DataTypes.CHAR(2),
    field: "trantype",
  },
  doc_no: {
    type: DataTypes.INTEGER,
    field: "docNo",
  },
  doc_date: {
    type: DataTypes.DATE,
    field: "docDate",
  },
  cashbank: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.DECIMAL(18, 2),
  },
  ode: {
    type: DataTypes.INTEGER,
  },
  year_code: {
    type: DataTypes.INTEGER,
    field: "yearCode",
  },
  company_code: {
    type: DataTypes.INTEGER,
    field: "companyCode",
  },
  cb: {
    type: DataTypes.INTEGER,
  },
  created_by: {
    type: DataTypes.INTEGER,
    field: "createdBy",
  },
  modified_by: {
    type: DataTypes.INTEGER,
    field: "modifiedBy",
  },
});
