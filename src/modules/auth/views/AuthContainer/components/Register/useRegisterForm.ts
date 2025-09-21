import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Toastify } from "@/components";
import { PATHS } from "@/lib";
import { useRegister } from "@/modules/auth/queries";
import { useAuthStore } from "@/stores";

import { RegisterFormValues, RegisterHelpers } from "./Register.helpers";

export const useRegisterForm = () => {
  const router = useRouter();
  const onAuthRegister = useAuthStore((s) => s.register);
  const form = useForm<RegisterFormValues>({
    defaultValues: RegisterHelpers.initialValues,
    resolver: zodResolver(RegisterHelpers.schema),
  });

  const { handleSubmit } = form;

  const { onRegister, isPending } = useRegister({
    onSuccess: () => {
      Toastify.Success("Register successful");
      onAuthRegister();
      router.push(`${PATHS.budgetExpenseDashboard}`);
    },
    onError: () => {
      Toastify.Error("Register failed");
    },
  });

  const onValidSubmit = (data: RegisterFormValues) => {
    onRegister(RegisterHelpers.formatPayload(data));
  };

  return {
    form,
    isLoadingRegister: isPending,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
