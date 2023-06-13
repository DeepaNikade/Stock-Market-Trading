import { processQueryOutput } from "../../utils/query.js";
import { groupMaster } from "./groupMaster.model.js";

export async function insertIntoGroupMaster(values, options = { returning: true }) {
    const data = await groupMaster.create(values, options);
    return data?.dataValues;
  }

export async function deleteGroupMasterByQuery(query) {
    const remove = await groupMaster.destroy(query);
    return remove;
  }
  
export async function updateIntoGroupMaster(set, query = { where: {} }) {
    let [rows, data] = await groupMaster.update(set, query);
    return { rows_affected: rows, data };
  } 

  export async function getDataFromGroupMaster(query = { where: {} }) {
    let output = await groupMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }  
  export async function getAllDataFromGroupMaster(query = { where: {} }) {
    let output = await groupMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }  