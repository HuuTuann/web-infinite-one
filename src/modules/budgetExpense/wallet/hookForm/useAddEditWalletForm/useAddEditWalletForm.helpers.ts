import z from "zod";

import {
  InvitedMembersKeys,
  WalletKeys,
} from "@/modules/budgetExpense/wallet/base";

const schema = z.object({
  [WalletKeys.NAME]: z.string().nonempty("This field is required"),
  [WalletKeys.BASE_CURRENCY]: z.string().nonempty("This field is required"),
  [WalletKeys.INVITED_MEMBERS]: z.array(
    z.object({
      [InvitedMembersKeys.EMAIL]: z.string(),
      [InvitedMembersKeys.NAME]: z.string(),
      [InvitedMembersKeys.ROLE]: z.string(),
    })
  ),
});

const invitedMembersInitialValues = {
  [InvitedMembersKeys.EMAIL]: "",
  [InvitedMembersKeys.NAME]: "",
  [InvitedMembersKeys.ROLE]: "",
};

const initialValues: AddEditWalletFormValues = {
  [WalletKeys.NAME]: "",
  [WalletKeys.BASE_CURRENCY]: "",
  [WalletKeys.INVITED_MEMBERS]: [
    invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
    // invitedMembersInitialValues,
  ],
};

const AddEditWalletFormHelpers = {
  schema,
  initialValues,
  invitedMembersInitialValues,
};

export type AddEditWalletFormValues = z.infer<typeof schema>;
export { AddEditWalletFormHelpers };
