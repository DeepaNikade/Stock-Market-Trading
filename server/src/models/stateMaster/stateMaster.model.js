import { DataTypes } from "sequelize";
import { mssql } from "../../connection/index.js";
import { STATE_MASTER } from "../../database/dbSchema.js";

export const stateMaster = mssql.define(STATE_MASTER, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cityName: {
    type: DataTypes.STRING(25),
    fallowNull: false,
  },
  pinCode: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  subArea: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  stateCode: {
    type: DataTypes.STRING(25),
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
