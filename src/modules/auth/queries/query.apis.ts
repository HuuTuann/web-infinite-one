import { httpsService } from "@/lib";

import { LoginPayload } from "./useLogin/useLogin.type";
import { RegisterPayload } from "./useRegister/useRegister.type";

const BASE_PATH = "/auth";

const login = (payload: LoginPayload) => {
  return httpsService.post(`${BASE_PATH}/login`, payload);
};

const register = (payload: RegisterPayload) => {
  return httpsService.post(`${BASE_PATH}/register`, payload);
};

const logout = () => {
  return httpsService.post(`${BASE_PATH}/logout`);
};

const AuthApis = {
  login,
  register,
  logout,
};

export default AuthApis;
