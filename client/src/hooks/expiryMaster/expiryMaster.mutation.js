import { useMutation } from "@tanstack/react-query";
import {
  insertExpiryMasterData,
  updateExpiryMasterData,
  deleteExpiryMasterData,
} from "../../api/expiryMaster/expiryMaster.request";

export const useInsertIntoExpiryMasterData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await insertExpiryMasterData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Inserted Sucessfully");
    },
    onError: (error) => {
      alert("ExpiryMaster Insertion Failed");
      console.log(error);
      return error;
    },
  });
};

export const useUpdateIntoExpiryMasterData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await updateExpiryMasterData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Updated Sucessfully");
    },
    onError: (error) => {
      alert("ExpiryMaster Updation Failed");
      console.log(error);
      return error;
    },
  });
};

export const useDeleteIntoExpiryMasterData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await deleteExpiryMasterData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Deleted Sucessfully");
    },
    onError: (error) => {
      alert("ExpiryMaster Deletion Failed");
      console.log(error);
      return error;
    },
  });
};