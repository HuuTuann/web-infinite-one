import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { RegisterFormValues, RegisterHelpers } from "./Register.helpers";

export const useRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    defaultValues: RegisterHelpers.initialValues,
    resolver: zodResolver(RegisterHelpers.schema),
  });

  const { handleSubmit } = form;

  const onValidSubmit = (data: RegisterFormValues) => {
    console.log("Form submitted successfully:", data);
  };

  return {
    form,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
