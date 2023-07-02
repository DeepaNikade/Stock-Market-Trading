import { useMutation } from "@tanstack/react-query";
import {
  deleteTransactionHeadDetailsData,
  insertTransactionHeadDetailsData,
  updateTransactionHeadDetailsData,
} from "../../api/transactionHeadDetail/transactionHeadDetail.request";

export const useInsertIntoTransactionHeadDetailsData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await insertTransactionHeadDetailsData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Inserted Sucessfully 👍👍");
    },
    onError: (error) => {
      alert(
        "TransactionHeadDetail Insertion Failed 👎👎, Please Insert all the requried Fields."
      );
      console.log(error);
      return error;
    },
  });
};
export const useUpdateIntoTransactionHeadDetailsData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await updateTransactionHeadDetailsData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Updated Sucessfully 👍👍");
    },
    onError: (error) => {
      alert("TransactionHeadDetails Updation Failed 👎👎");
      console.log(error);
      return error;
    },
  });
};
export const useDeleteIntoTransactionHeadDetailsData = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await deleteTransactionHeadDetailsData(data);
      return res;
    },
    onSuccess: (data) => {
      console.log(data);
      alert("Deleted Sucessfully 👍👍");
    },
    onError: (error) => {
      alert("transactionHeadDetails Deletion Failed 👎👎");
      console.log(error);
      return error;
    },
  });
};
