import { useForm } from "react-hook-form";
import { LoginFormValues, LoginHelpers } from "./Login.helpers";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginForm = () => {
  const form = useForm<LoginFormValues>({
    defaultValues: LoginHelpers.initialValues,
    resolver: zodResolver(LoginHelpers.schema),
  });

  const { handleSubmit } = form;

  const onValidSubmit = (data: LoginFormValues) => {
    console.log("Form submitted successfully:", data);
  };

  return {
    form,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
