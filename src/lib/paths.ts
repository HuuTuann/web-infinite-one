export const PREFIX = {
  wallet: "/wallet",
};
export const PATHS = {
  root: "/",
  auth: "/auth",
  wallet: PREFIX.wallet,
} as const;

export type PathKey = keyof typeof PATHS;
export type PathValue = (typeof PATHS)[PathKey];

export const getPath = (key: PathKey): PathValue => PATHS[key];
