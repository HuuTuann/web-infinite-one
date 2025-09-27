export const PREFIX = {
  wallet: "/wallet",
};
export const PATHS = {
  root: "/",
  auth: "/auth",
  wallets: `${PREFIX.wallet}s`,
  walletDetail: `${PREFIX.wallet}/:id`,
} as const;

export type PathKey = keyof typeof PATHS;
export type PathValue = (typeof PATHS)[PathKey];

export const getPath = (key: PathKey): PathValue => PATHS[key];
