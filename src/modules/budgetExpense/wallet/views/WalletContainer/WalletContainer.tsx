"use client";

import { Card, Stack } from "@/components";

import { WalletCard } from "../WalletCard";
import { WalletToolbar } from "../WalletToolbar";

export const WalletContainer = () => {
  return (
    <Card title="Wallet">
      <Stack gap="md">
        <WalletToolbar />
        <WalletCard />
      </Stack>
    </Card>
  );
};
