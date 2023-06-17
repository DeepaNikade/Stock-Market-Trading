import api from "../../utils/api-instance";

export const insertCompanyData = async (data) => {
    return await api.post("/user/company",data);
};

export const deleteCompanyData = async (data) => {
    return await api.post("/user/company/delete", data);
  };
  
  export const updateCompanyData = async (data) => {
    return await api.patch("/user/company", data);
  };
  
  export const getAllCompanyData = async () => {
    return await api.get("/user/company/all");
  };