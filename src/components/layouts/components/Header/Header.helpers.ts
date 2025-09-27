import { PATHS } from "@/lib";

const getTitleFromPathname = (pathname: string): string => {
  if (pathname.startsWith(PATHS.wallets)) {
    return "Wallets";
  }

  if (pathname.startsWith(PATHS.walletDetail.replace(":id", ""))) {
    return "Wallet Detail";
  }

  return "";
};

export const HeaderHelpers = {
  getTitleFromPathname,
};
