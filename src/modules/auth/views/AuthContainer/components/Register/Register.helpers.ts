import { AuthKeys } from "@/modules/auth/bases";
import z from "zod";
import { LoginHelpers } from "../Login/Login.helpers";

const schema = z
  .object({
    ...LoginHelpers.schema.shape,
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
    },
  );

const initialValues: RegisterFormValues = {
  ...LoginHelpers.initialValues,
  [AuthKeys.CONFIRM_PASSWORD]: "",
};

type RegisterFormValues = z.infer<typeof schema>;

const RegisterHelpers = {
  schema,
  initialValues,
};

export { RegisterHelpers, type RegisterFormValues };
