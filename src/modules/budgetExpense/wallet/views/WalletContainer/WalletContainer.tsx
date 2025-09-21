"use client";

import { Card, Stack } from "@/components";

import { Wallet } from "../Wallet";
import { WalletToolbar } from "../WalletToolbar";

export const WalletContainer = () => {
  return (
    <Card title="Wallet">
      <Stack gap="md">
        <WalletToolbar />
        <Wallet />
      </Stack>
    </Card>
  );
};
