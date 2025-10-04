import z from "zod";

import { AccountsKeys } from "../../base";
import { CreateAccountPayload } from "../../queries";

const schema = z.object({
  [AccountsKeys.NAME]: z.string().nonempty("This field is required"),
  [AccountsKeys.CURRENCY_ID]: z.string().nonempty("This field is required"),
  [AccountsKeys.OPENING_BALANCE]: z.string().nonempty("This field is required"),
});

const initialValues: AddEditAccountFormValues = {
  [AccountsKeys.NAME]: "",
  [AccountsKeys.CURRENCY_ID]: "",
  [AccountsKeys.OPENING_BALANCE]: "",
};

const formatPayload = (
  walletId: string,
  data: AddEditAccountFormValues
): CreateAccountPayload => {
  return {
    ...data,
    [AccountsKeys.WALLET_ID]: walletId,
    [AccountsKeys.OPENING_BALANCE]: Number(data[AccountsKeys.OPENING_BALANCE]),
  };
};

const AddEditAccountFormHelpers = {
  schema,
  initialValues,
  formatPayload,
};

export type AddEditAccountFormValues = z.infer<typeof schema>;
export default AddEditAccountFormHelpers;
