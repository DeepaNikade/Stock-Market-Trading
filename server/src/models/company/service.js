import { processQueryOutput } from "../../utils/query.js";
import { company } from "./company.model.js";

export async function insertIntoCompany(values,options = {returning:true}){
    const data = await company.create(values,options);
    return data?.dataValues;

}

export async function deleteCompanyByQuery(query){
    const remove = await company.destroy(query);
    return remove;
}

export async function updateIntoCompany(set,query = {where:{} }){
    const [rows,data] = await company.update(set,query);
    return {rows_affected: rows,data}; 
}

export async function getDataFromCompany(query = { where: {} }) {
    let output = await company.findAll(query);
    return processQueryOutput.forFindAll(output);
  }
 
  export async function getAllDataFromCompany(query = { where: {} }) {
    let output = await company.findAll(query);
    return processQueryOutput.forFindAll(output);
  } 