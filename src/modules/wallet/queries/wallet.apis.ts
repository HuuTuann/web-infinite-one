import { httpsService } from "@/lib";

import { CreateWalletPayload } from "./useCreateWallet/useCreateWallet.types";

const BASE_PATH = "/wallet";

const createWallet = (payload: CreateWalletPayload) => {
  return httpsService.post(`${BASE_PATH}`, payload);
};

const getWallets = () => {
  return httpsService.get(`${BASE_PATH}`);
};

const WalletApis = {
  create: createWallet,
  get: getWallets,
};

export default WalletApis;
