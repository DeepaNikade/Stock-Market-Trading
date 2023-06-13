import { DataTypes } from "sequelize";
import { mssql } from "../../connection/index.js";
import { EXPIRY_MASTER } from "../../database/dbSchema.js";

export const expiryMaster = mssql.define(EXPIRY_MASTER,{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      expiryDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },   
})