import z from "zod";

import { AuthKeys } from "@/modules/auth/bases";

const schema = z.object({
  [AuthKeys.EMAIL]: z.email(),
  [AuthKeys.PASSWORD]: z
    .string()
    .min(8, "This field must be at least 8 characters long")
    .max(100, "This field must be at most 100 characters long"),
});

const initialValues: LoginFormValues = {
  [AuthKeys.EMAIL]: "",
  [AuthKeys.PASSWORD]: "",
};

type LoginFormValues = z.infer<typeof schema>;

const LoginHelpers = {
  schema,
  initialValues,
};

export { type LoginFormValues,LoginHelpers };
