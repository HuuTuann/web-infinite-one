import { useForm } from "react-hook-form";
import { LoginFormValues, LoginHelpers } from "./Login.helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/modules/auth/queries";
import { Toastify } from "@/components/ui/io-ui";
import { useAuthStore } from "@/stores";

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
