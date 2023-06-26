import api from "../../utils/api-instance";

export const getStateMasterData = async () => {
  return await api.get("/user/stateMaster");
};
export const insertStateMasterData = async (data) => {
  return await api.post("/user/stateMaster", data);
};
export const deleteStateMasterData = async (data) => {
  return await api.post("/user/stateMaster", data);
};
export const updateStateMasterData = async (data) => {
  return await api.patch("/user/stateMaster", data);
};

export const getAllStateMasterData = async () => {
  return await api.get("/user/stateMaster/all");
};
