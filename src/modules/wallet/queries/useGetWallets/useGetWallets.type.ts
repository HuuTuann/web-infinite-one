import { WalletKeys } from "../../base";

type GetWalletListResponse = {
  [WalletKeys.ID]: string;
  [WalletKeys.NAME]: string;
  [WalletKeys.BASE_CURRENCY]: string;
  [WalletKeys.TOTAL_MEMBERS]: number;
  [WalletKeys.TOTAL_ACCOUNTS]: number;
  [WalletKeys.TOTAL_BALANCES]: number;
  [WalletKeys.ROLE]: string;
  [WalletKeys.UPDATED_AT]: string;
  [WalletKeys.CREATED_AT]: string;
};

export type { GetWalletListResponse };
