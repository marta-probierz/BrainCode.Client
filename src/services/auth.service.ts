import axios from "axios/instanceAxios";
import ILogin from "components/Login/Login.interface";

export const login = (data: ILogin) => {
  return axios.post("/login", data).then((res) => {
    if (res.data.token) {
      localStorage.setItem("user", res.data.token );
      localStorage.setItem("mentor", res.data.mentor);
    }
    return res.data;
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") as string) && JSON.parse(localStorage.getItem("mentor") as string );
};

const REGISTER_URL = "/users/register";

export const register = async (
  username: string,
  email: string,
  password: string,
  confirmpassword: string,
  firstname?: string,
  lastname?: string,
) => {
  return await axios
    .post(REGISTER_URL, {
      username,
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    })
    .then((res) => {
      return res.data;
    });
};
