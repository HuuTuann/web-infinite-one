import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Toastify } from "@/components";
import { PATHS } from "@/lib";
import { useLogin } from "@/modules/auth/queries";
import { useAuthStore } from "@/stores";

import { LoginFormValues, LoginHelpers } from "./Login.helpers";

export const useLoginForm = () => {
  const router = useRouter();
  const onAuthLogin = useAuthStore((s) => s.login);
  const form = useForm<LoginFormValues>({
    defaultValues: LoginHelpers.initialValues,
    resolver: zodResolver(LoginHelpers.schema),
  });

  const { handleSubmit } = form;

  const { isPending, onLogin } = useLogin({
    onSuccess: () => {
      onAuthLogin();
      router.push(`${PATHS.wallet}`);
      Toastify.Success("Login successful");
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
