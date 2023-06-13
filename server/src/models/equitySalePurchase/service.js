import { processQueryOutput } from "../../utils/query.js";
import { equitySalePurchase } from "./equitySalePurchase.model.js";

export async function insertIntoEquitySalePurchase(
  values,
  options = { returning: true }
) {
  const data = await equitySalePurchase.create(values, options);
  return data?.dataValues;
}

export async function deleteEquitySalePurchaseByQuery(query) {
  const remove = await equitySalePurchase.destroy(query);
  return remove;
}

export async function updateIntoEquitySalePurchase(set, query = { where: {} }) {
  const [rows, data] = await equitySalePurchase.update(set, query);
  return { rows_affected: rows, data };
}

export async function getDataFromEquitySalePurchase(query = { where: {} }) {
  let output = await equitySalePurchase.findAll(query);
  return processQueryOutput.forFindAll(output);
}
export async function getAllDataFromEquitySalePurchase(query = { where: {} }) {
  let output = await equitySalePurchase.findAll(query);
  return processQueryOutput.forFindAll(output);
}
