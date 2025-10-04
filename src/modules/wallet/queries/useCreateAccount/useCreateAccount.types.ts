import { AccountsKeys } from "../../base";

type CreateAccountPayload = {
  [AccountsKeys.WALLET_ID]: string;
  [AccountsKeys.NAME]: string;
  [AccountsKeys.CURRENCY_ID]: string;
  [AccountsKeys.OPENING_BALANCE]: number;
};

export type { CreateAccountPayload };
