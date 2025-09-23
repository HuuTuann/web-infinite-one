import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCreateWallet } from "../../queries";

import {
  AddEditWalletFormHelpers,
  AddEditWalletFormValues,
} from "./useAddEditWalletForm.helpers";

export const useAddEditWalletForm = () => {
  const form = useForm<AddEditWalletFormValues>({
    defaultValues: AddEditWalletFormHelpers.initialValues,
    resolver: zodResolver(AddEditWalletFormHelpers.schema),
  });

  const { onCreateWallet, isPending } = useCreateWallet();

  const { handleSubmit } = form;

  const onValidSubmit = (data: AddEditWalletFormValues) => {
    onCreateWallet(data);
  };

  return {
    form,
    isLoadingCreateWallet: isPending,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
