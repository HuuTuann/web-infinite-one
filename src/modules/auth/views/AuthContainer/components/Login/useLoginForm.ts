import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Toastify } from "@/io-ui";
import { useLogin } from "@/modules/auth/queries";
import { useAuthStore } from "@/stores";

import { LoginFormValues, LoginHelpers } from "./Login.helpers";

export const useLoginForm = () => {
  const onAuthLogin = useAuthStore((s) => s.login);

  const form = useForm<LoginFormValues>({
    defaultValues: LoginHelpers.initialValues,
    resolver: zodResolver(LoginHelpers.schema),
  });

  const { handleSubmit } = form;

  const { isPending, onLogin } = useLogin({
    onSuccess: () => {
      Toastify.Success("Login successful");
      onAuthLogin();
    },
    onError: () => {
      Toastify.Error("Login failed");
    },
  });

  const onValidSubmit = (data: LoginFormValues) => {
    onLogin(data);
  };

  return {
    form,
    isLoadingLogin: isPending,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
