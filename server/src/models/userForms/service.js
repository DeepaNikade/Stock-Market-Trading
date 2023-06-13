import { processQueryOutput } from "../../utils/query.js";
import { userForms } from "./userForms.model.js";

export async function insertIntoUserForms(values, options = { returning: true }) {
    const data = await userForms.create(values, options);
    return data?.dataValues;
  }
  
  export async function deleteUserFormsByQuery(query) {
    const remove = await userForms.destroy(query);
    return remove;
  }
  
  export async function updateIntoUserForms(set, query = { where: {} }) {
    let [rows, data] = await userForms.update(set, query);
    return { rows_affected: rows, data };
  }

  export async function getDataFromUserForms(query = { where: {} }) {
    let output = await userForms.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
  