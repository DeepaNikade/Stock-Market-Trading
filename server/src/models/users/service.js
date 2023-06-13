import { processQueryOutput } from "../../utils/query.js";
import { users } from "./users.model.js";

export async function insertIntoUsers(values, options = { returning: true }) {
    const data = await users.create(values, options);
    return data?.dataValues;
  }
  
  export async function deleteUsersByQuery(query) {
    const remove = await users.destroy(query);
    return remove;
  }
  
  export async function updateIntoUsers(set, query = { where: {} }) {
    let [rows, data] = await users.update(set, query);
    return { rows_affected: rows, data };
  }

  export async function getDataFromUsers(query = { where: {} }) {
    let output = await users.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
  