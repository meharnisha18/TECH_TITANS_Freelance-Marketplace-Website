import API from "./api";

export const getPayments = () => {
  return API.get("/payments");
};