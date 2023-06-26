import api from "../../utils/api-instance";

export const getExpiryMasterData = async (data) => {
  return await api.get("/user/expiryMaster", data);
};
export const insertExpiryMasterData = async (data) => {
  return await api.post("/user/expirMaster", data);
};
export const deleteExpiryMasterData = async (data) => {
  return await api.post("/user/expiryMaster/delete", data);
};
export const updateExpiryMasterData = async (data) => {
  return await api.patch("/user/expiryMaster", data);
};

export const getAllExpiryMasterData = async () => {
  return await api.get("/user/expiryMaster/all");
};
