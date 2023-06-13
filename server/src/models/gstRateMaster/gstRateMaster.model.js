import { DataTypes } from "sequelize";
import { mssql } from "../../connection/index.js";
import { GST_RATE_MASTER } from "../../database/dbSchema.js";

export const gstRateMaster = mssql.define(GST_RATE_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  gstCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gstName: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  rate: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
  cGstRate: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
  sGstRate: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
  iGstRate: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
  companyCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modifiedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
