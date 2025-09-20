import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  AddEditWalletFormHelpers,
  AddEditWalletFormValues,
} from "./useAddEditWalletForm.helpers";

export const useAddEditWalletForm = () => {
  const form = useForm<AddEditWalletFormValues>({
    defaultValues: AddEditWalletFormHelpers.initialValues,
    resolver: zodResolver(AddEditWalletFormHelpers.schema),
  });

  const { handleSubmit } = form;

  const onValidSubmit = (data: AddEditWalletFormValues) => {
    console.log(data);
  };

  return {
    form,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
