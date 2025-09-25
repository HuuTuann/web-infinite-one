import z from "zod";

import { AuthKeys } from "@/modules/auth/bases";
import { RegisterPayload } from "@/modules/auth/queries";

import { LoginHelpers } from "../Login/Login.helpers";

const schema = z
  .object({
    ...LoginHelpers.schema.shape,
    [AuthKeys.NAME]: z.string().min(1, "This field is required"),
    [AuthKeys.CONFIRM_PASSWORD]: z
      .string()
      .min(8, "This field must be at least 8 characters long")
      .max(100, "This field must be at most 100 characters long"),
  })
  .refine(
    (data) => {
      const {
        [AuthKeys.PASSWORD]: password,
        [AuthKeys.CONFIRM_PASSWORD]: confirmPassword,
      } = data;

      return password === confirmPassword;
    },
    {
      path: [AuthKeys.CONFIRM_PASSWORD],
      message: "Passwords do not match",
    }
  );

const initialValues: RegisterFormValues = {
  ...LoginHelpers.initialValues,
  [AuthKeys.NAME]: "",
  [AuthKeys.CONFIRM_PASSWORD]: "",
};

const formatPayload = (data: RegisterFormValues): RegisterPayload => {
  const { [AuthKeys.CONFIRM_PASSWORD]: _confirmPassword, ...restData } = data;
  return restData;
};

type RegisterFormValues = z.infer<typeof schema>;

const RegisterHelpers = {
  schema,
  initialValues,
  formatPayload,
};

export { type RegisterFormValues, RegisterHelpers };
