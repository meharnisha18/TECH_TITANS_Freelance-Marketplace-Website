import API from "./api";

export const sendProposal = (data) => {
  return API.post("/proposals", data);
};

export const getMyProposals = (freelancerId) => {
  return API.get(`/proposals/freelancer/${freelancerId}`);
};