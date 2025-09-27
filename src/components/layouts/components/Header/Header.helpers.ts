import { PATHS } from "@/lib";

const titleMap = {
  [PATHS.wallets]: "Wallets",
  [PATHS.walletDetail]: "Wallet Detail",
} as const;

export const HeaderHelpers = {
  titleMap,
};
