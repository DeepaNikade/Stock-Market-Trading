import { processQueryOutput } from "../../utils/query.js";
import { expiryMaster } from "./expiryMaster.model.js";

export async function insertIntoExpiryMaster(values,options = {returning:true}){
    const data = await expiryMaster.create(values,options);
    return data?.dataValues;
}

export async function deleteExpiryMasterByQuery(query){
    const remove = await expiryMaster.destroy(query);
    return remove;
}

export async function updateExpiryMaster(set,query = {where:{}}){
    const [rows,data] = await expiryMaster.update(set,query);
    return {rows_affected:rows,data};
}

export async function getDataFromExpiryMaster(query = { where: {} }) {
    let output = await expiryMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
export async function getAllDataFromExpiryMaster(query = { where: {} }) {
    let output = await expiryMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }