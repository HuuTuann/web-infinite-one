import { axiois } from "@/lib";

const BASE_PATH = "/auth";

const login = (payload: any) => {
  return axiois.post(`${BASE_PATH}/login`, payload);
};

const AuthApis = {
  login,
};

export default AuthApis;
