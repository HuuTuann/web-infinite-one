import { axiosInstance } from "@/lib";
import { LoginPayload } from "./useLogin/useLogin.type";

const BASE_PATH = "/auth";

const login = (payload: LoginPayload) => {
  return axiosInstance.post(`${BASE_PATH}/login`, payload);
};

const AuthApis = {
  login,
};

export default AuthApis;
