"use client";

import { Stack } from "@/components";

import { General, Overview } from "./components";

export const WalletDetail = () => {
  return (
    <Stack gap="lg">
      <General />
      <Overview />
    </Stack>
  );
};
