import { DataTypes } from "sequelize";
import { mssql } from "../../connection/index.js";
import { GROUP_MASTER } from "../../database/dbSchema.js";

export const groupMaster = mssql.define(GROUP_MASTER,{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      groupName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      groupType: {
        type: DataTypes.CHAR(1),
        allowNull: false,
      },
      groupOrder: {
        type: DataTypes.INTEGER,
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