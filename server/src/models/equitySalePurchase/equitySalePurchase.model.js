import { DataTypes } from "sequelize";
import mssql from "../../connection/mssql.connection.js";
import { EQUITY_SALE_PURCHASE } from "../../database/dbSchema.js";

export const equitySalePurchase = mssql.define(EQUITY_SALE_PURCHASE, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bill_no: {
    type: DataTypes.STRING(255),
    field: "billNo",
  },
  bill_date: {
    type: DataTypes.DATEONLY,
    field: "billDate",
  },
  transaction_type: {
    type: DataTypes.CHAR(1),
    field: "transactionType",
  },
  script_id: {
    type: DataTypes.INTEGER,
    field: "scriptId",
  },
  purchase_id: {
    type: DataTypes.INTEGER,
    field: "purchaseId",
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  bonus: {
    type: DataTypes.INTEGER,
  },
  value: {
    type: DataTypes.DECIMAL(18, 2),
  },
  account_id: {
    type: DataTypes.INTEGER,
    field: "accountId",
  },
  brokage: {
    type: DataTypes.DECIMAL(18, 2),
  },
  cess: {
    type: DataTypes.DECIMAL(18, 2),
  },
  stt: {
    type: DataTypes.DECIMAL(18, 2),
  },
  service_tax: {
    type: DataTypes.DECIMAL(18, 2),
    field: "serviceTax",
  },
  stamp_duty: {
    type: DataTypes.DECIMAL(18, 2),
    field: "stampDuty",
  },
  turnover_tax: {
    type: DataTypes.DECIMAL(18, 2),
    field: "turnoverTax",
  },
  net_value: {
    type: DataTypes.DECIMAL(18, 2),
    field: "netValue",
  },
  net_rate: {
    type: DataTypes.DECIMAL(18, 2),
    field: "netRate",
  },
  company_code: {
    type: DataTypes.INTEGER,
    field: "companyCode",
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
