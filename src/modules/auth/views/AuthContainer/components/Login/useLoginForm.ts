import { useForm } from "react-hook-form";
import { LoginFormValues, LoginHelpers } from "./Login.helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/modules/auth/queries";

export const useLoginForm = () => {
  const form = useForm<LoginFormValues>({
    defaultValues: LoginHelpers.initialValues,
    resolver: zodResolver(LoginHelpers.schema),
  });

  const { handleSubmit } = form;

  const { isPending, onLogin } = useLogin();

  const onValidSubmit = (data: LoginFormValues) => {
    console.log("Form submitted successfully:", data);
    onLogin(data);
  };

  return {
    form,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
