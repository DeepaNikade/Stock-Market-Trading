import { processQueryOutput } from "../../utils/query.js";
import { stateMaster } from "./stateMaster.model.js";


export async function insertIntoStateMaster(values, options = { returning: true }) {
  const data = await stateMaster.create(values, options);
  return data?.dataValues;
}

export async function deleteStateMasterByQuery(query) {
  const remove = await stateMaster.destroy(query);
  return remove;
}

export async function updateIntoStateMaster(set, query = { where: {} }) {
  let [rows, data] = await stateMaster.update(set, query);
  return { rows_affected: rows, data };
}
export async function getDataFromStateMaster(query = { where: {} }) {
    let output = await stateMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
export async function getAllDataFromStateMaster(query = { where: {} }) {
    let output = await stateMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }