import API from "./api";

export const createProject = (data) => {
  return API.post("/projects", data);
};

export const getAllProjects = () => {
  return API.get("/projects");
};