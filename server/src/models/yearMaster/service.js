import { processQueryOutput } from "../../utils/query.js";
import { yearMaster } from "./yearMaster.model.js";

export async function getDataFromYearMaster(query = { where: {} }) {
  let output = await yearMaster.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateIntoYearMaster(set, query = { where: {} }) {
  let [rows, data] = await yearMaster.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoYearMaster(
  query,
  options = { returning: true }
) {
  let data = await yearMaster.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteYearMasterByQuery(query) {
  let data = await yearMaster.findAll(query);
  const rows = await yearMaster.destroy(query);
  return { rows_affected: rows, data: data };
}
