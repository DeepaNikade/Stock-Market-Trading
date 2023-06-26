import api from "../../utils/api-instance";

export const getUsersData = async (data) => {
  return await api.get("/user/user", data);
};

export const getAllUsersData = async () => {
  return await api.get("/user/users/all");
};
