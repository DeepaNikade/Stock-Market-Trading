import { processQueryOutput } from "../../utils/query.js";
import { itemMaster } from "./itemMaster.model.js";

export async function insertIntoItemMaster(values, options = { returning: true }) {
    const data = await itemMaster.create(values, options);
    return data?.dataValues;
  }
  
  export async function deleteItemMasterByQuery(query) {
    const remove = await itemMaster.destroy(query);
    return remove;
  }
  
  export async function updateIntoItemMaster(set, query = { where: {} }) {
    let [rows, data] = await itemMaster.update(set, query);
    return { rows_affected: rows, data };
  }
  export async function getDataFromItemMaster(query = { where: {} }) {
    let output = await itemMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
  export async function getAllDataFromItemMaster(query = { where: {} }) {
    let output = await itemMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }