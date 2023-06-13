import { DataTypes } from "sequelize";
import { mssql } from "../../connection/index.js";
import { USER_FORMS } from "../../database/dbSchema.js";

export const userForms = mssql.define(USER_FORMS, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  formName: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
});
