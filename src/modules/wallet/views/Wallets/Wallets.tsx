"use client";

import { Grid, Stack } from "@/components";

import { useGetWallets } from "../../queries";

import { Wallet, WalletToolbar } from "./components";

export const Wallets = () => {
  const { wallets } = useGetWallets();

  return (
    <Stack gap="md">
      <WalletToolbar />
      <Grid.Row>
        {wallets?.map((wallet) => (
          <Grid.Col key={wallet.id} cols={4}>
            <Wallet key={wallet.id} wallet={wallet} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </Stack>
  );
};
