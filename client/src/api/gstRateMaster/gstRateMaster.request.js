import api from "../../utils/api-instance";

export const getGstRateMasterData = async () => {
  return await api.get("/user/gstRateMaster");
};
export const insertGstRateMasterData = async (data) => {
  return await api.post("/user/gstRateMaster", data);
};
export const deleteGstRateMasterData = async (data) => {
  return await api.post("/user/gstRateMaster/delete", data);
};
export const updateGstRateMasterData = async (data) => {
  return await api.patch("/user/gstRateMaster", data);
};

export const getAllGstRateMasterData = async ()=>{
  return await api.get("/user/gstRateMaster/all");
}
