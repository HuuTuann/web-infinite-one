import { AuthKeys } from "../../bases";

type LoginPayload = {
  [AuthKeys.EMAIL]: string;
  [AuthKeys.PASSWORD]: string;
};

export type { LoginPayload };
