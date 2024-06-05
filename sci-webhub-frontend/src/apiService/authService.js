import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

export const signup = (payload) => {
  // headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const userDetails = {
    name: payload?.name,
    email: payload?.email,
    phone_number: payload?.mobile,
    password: payload?.password,
  };

  return axios.post("/user/signup", userDetails);
};

export const login = (payload) => {
  // headers.auth_token = process.env.NEXT_PUBLIC_TOKEN;

  const userDetails = {
    email: payload?.email,
    password: payload?.password,
  };

  return axios.post("/user/login", userDetails);
};
