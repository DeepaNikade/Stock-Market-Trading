import { processQueryOutput } from "../../utils/query.js";
import { transactionDetails } from "./transactionDetails.model.js";

export async function getDataFromTransactionDetails(query = { where: {} }) {
  let output = await transactionDetails.findAll(query);
  return processQueryOutput.forFindAll(output);
}
export async function getAllDataFromTransactionDetails(query = { where: {} }) {
  let output = await transactionDetails.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateTransactionDetailsByQuery(
  set,
  query = { where: {} }
) {
  let [rows, data] = await transactionDetails.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoTransactionDetails(
  query,
  options = { returning: true }
) {
  const data = await transactionDetails.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteTransactionDetailsByQuery(query) {
  let data = await transactionDetails.findAll(query);
  let rows = await transactionDetails.destroy(query);
  return { rows_affected: rows, data: data };
}
