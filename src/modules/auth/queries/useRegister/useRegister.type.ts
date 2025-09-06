import { AuthKeys } from "../../bases";
import { LoginPayload } from "../useLogin/useLogin.type";

type RegisterPayload = LoginPayload & {
  [AuthKeys.NAME]: string;
};

export type { RegisterPayload };
