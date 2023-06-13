import { processQueryOutput } from "../../utils/query.js";
import {accountMaster} from "./accountMaster.model.js";

export async function insertIntoAccountMaster(values,options = {returning:true}){
    const data = await accountMaster.create(values,options);
    return data?.dataValues;
}

export async function deleteAccountMasterByQuery(query){
    const remove = await accountMaster.destroy(query);
    return remove;
}

export async function updateIntoAccountMaster(set,query = {where:{}}){
    let[rows,data] = await accountMaster.update(set,query);
    return {rows_affected:rows,data};
}

export async function getDataFromAccountMaster(query = { where: {} }) {
    let output = await accountMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
export async function getAllDataFromAccountMaster(query = { where: {} }) {
    let output = await accountMaster.findAll(query);
    return processQueryOutput.forFindAll(output);
  }