import { DataTypes } from "sequelize";
import { mssql } from "../../connection/index.js";
import { SCRIPT_MASTER } from "../../database/dbSchema.js";

export const scriptMaster = mssql.define(SCRIPT_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  scriptName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  scriptType: {
    type: DataTypes.CHAR(1),
    allowNull: false,
  },
  lotSize: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  faceValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  scriptId: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  isinNo: {
    type: DataTypes.STRING(15),
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
