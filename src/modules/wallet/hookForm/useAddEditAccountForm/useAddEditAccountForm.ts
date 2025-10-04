import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCreateAccount } from "../../queries";

import AddEditAccountFormHelpers, {
  AddEditAccountFormValues,
} from "./useAddEditAccountForm.helpers";

export const useAddEditAccountForm = (
  walletId: string,
  _accountId?: string
) => {
  const form = useForm<AddEditAccountFormValues>({
    defaultValues: AddEditAccountFormHelpers.initialValues,
    resolver: zodResolver(AddEditAccountFormHelpers.schema),
  });

  const { onCreateAccount, isPending: isLoadingCreateAccount } =
    useCreateAccount();

  const { handleSubmit } = form;

  const onValidSubmit = (data: AddEditAccountFormValues) => {
    onCreateAccount(AddEditAccountFormHelpers.formatPayload(walletId, data));
  };

  return {
    form,
    isLoadingCreateAccount,
    onSubmit: handleSubmit(onValidSubmit),
  };
};
