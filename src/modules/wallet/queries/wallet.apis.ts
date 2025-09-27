import { httpsService } from "@/lib";

import { CreateWalletPayload } from "./useCreateWallet/useCreateWallet.types";

const BASE_PATH = "/wallet";

const createWallet = (payload: CreateWalletPayload) => {
  return httpsService.post(`${BASE_PATH}`, payload);
};

const getWallets = () => {
  return httpsService.get(`${BASE_PATH}`);
};

const getWalletGeneral = (id: string) => {
  return httpsService.get(`${BASE_PATH}/${id}/general`);
};

const WalletApis = {
  create: createWallet,
  gets: getWallets,
  getGeneral: getWalletGeneral,
};

export default WalletApis;
