import { processQueryOutput } from "../../utils/query.js";
import { scriptMaster } from "./scriptMaster.model.js";

export async function insertIntoScriptMaster(values, options = { returning: true }) {
    const data = await scriptMaster.create(values, options);
    return data?.dataValues;
  }
  
  export async function deleteScriptMasterByQuery(query) {
    const remove = await scriptMaster.destroy(query);
    return remove;
  }
  
  export async function updateIntoScriptMaster(set, query = { where: {} }) {
    let [rows, data] = await scriptMaster.update(set, query);
    return { rows_affected: rows, data };
  }
  export async function getDataFromScriptMaster(query = { where: {} }) {
    let output = await scriptMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
  export async function getAllDataFromScriptMaster(query = { where: {} }) {
    let output = await scriptMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }