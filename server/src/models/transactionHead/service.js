import { processQueryOutput } from "../../utils/query.js";
import { transactionHead } from "./transactionHead.model.js";

export async function getDataFromTransactionHead(query = { where: {} }) {
  let output = await transactionHead.findAll(query);
  return processQueryOutput.forFindAll(output);
}

export async function updateTransactionHeadByQuery(set, query = { where: {} }) {
  let [rows, data] = await transactionHead.update(set, query);
  data = processQueryOutput.forUpdate(data);
  return { rows_affected: rows, data };
}

export async function insertIntoTransactionHead(
  query,
  options = { returning: true }
) {
  const data = await transactionHead.create(query, options);
  return processQueryOutput.forInsert(data);
}

export async function deleteTransactionHeadByQuery(query) {
  let data = await transactionHead.findAll(query);
  let rows = await transactionHead.destroy(query);
  return { rows_affected: rows, data: data };
}
