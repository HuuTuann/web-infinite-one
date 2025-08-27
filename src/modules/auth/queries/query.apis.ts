import { axios } from "@/lib";
import { LoginPayload } from "./useLogin/useLogin.type";

const BASE_PATH = "/auth";

const login = (payload: LoginPayload) => {
  return axios.post(`${BASE_PATH}/login`, payload);
};

const AuthApis = {
  login,
};

export default AuthApis;
