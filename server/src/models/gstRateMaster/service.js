import { processQueryOutput } from "../../utils/query.js";
import { gstRateMaster } from "./gstRateMaster.model.js";

export async function insertIntoGstRateMaster(
  values,
  options = { returning: true }
) {
  const data = await gstRateMaster.create(values, options);
  return data?.dataValues;
}

export async function deleteGstRateMasterByQuery(query) {
  const remove = await gstRateMaster.destroy(query);
  return remove;
}

export async function updateIntoGstRateMaster(set, query = { where: {} }) {
  let [rows, data] = await gstRateMaster.update(set, query);
  return { rows_affected: rows, data };
}
export async function getDataFromGstRateMaster(query = { where: {} }) {
  let output = await gstRateMaster.findOne(query);
  return processQueryOutput.forFindAll(output);
}
export async function getAllDataFromGstRateMaster(query = { where: {} }) {
  let output = await gstRateMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}
