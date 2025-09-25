import { InvitedMembersKeys, WalletKeys } from "../../base";

type CreateWalletPayload = {
  [WalletKeys.NAME]: string;
  [WalletKeys.BASE_CURRENCY_ID]: string;
  [WalletKeys.INVITED_MEMBERS]?: {
    [InvitedMembersKeys.EMAIL]: string;
    [InvitedMembersKeys.NAME]: string;
    [InvitedMembersKeys.ROLE]: string;
  }[];
};

export type { CreateWalletPayload };
