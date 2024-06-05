import axios from "axios";
import Cookies from "js-cookie";

export const projectsByUserId = (id) => {
  return axios.get(`/project/get?userId=${id}`, {
    headers: {
      "x-access-token": Cookies.get("token"),
    },
  });
};

export const projectsById = (id) => {
  return axios.get(`/project/get-by-id?projectId=${id}`, {
    headers: {
      "x-access-token": Cookies.get("token"),
    },
  });
};

export const addProject = (payload) => {
  const projectDetails = {
    name: payload?.name,
    git_url: payload?.git_url,
    custome_domain: payload?.custom_domain,
    user_id: Cookies.get("userId"),
  };

  return axios.post("/project/create", projectDetails, {
    headers: {
      "x-access-token": Cookies.get("token"),
    },
  });
};

export const logInfo = (id) => {
  return axios.get(`deployment/logs/${id}`);
};
