import { axiosInstance } from "@/lib";

import { LoginPayload } from "./useLogin/useLogin.type";
import { RegisterPayload } from "./useRegister/useRegister.type";

const BASE_PATH = "/auth";

const login = (payload: LoginPayload) => {
  return axiosInstance.post(`${BASE_PATH}/login`, payload);
};

const register = (payload: RegisterPayload) => {
  return axiosInstance.post(`${BASE_PATH}/register`, payload);
};

const logout = () => {
  return axiosInstance.post(`${BASE_PATH}/logout`);
};

const AuthApis = {
  login,
  register,
  logout,
};

export default AuthApis;
