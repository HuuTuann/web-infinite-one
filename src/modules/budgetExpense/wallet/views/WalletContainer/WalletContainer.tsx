"use client";

import { Grid, Stack, Typography } from "@/components";

import { useGetWallets } from "../../queries";
import { WalletCard } from "../WalletCard";
import { WalletToolbar } from "../WalletToolbar";

export const WalletContainer = () => {
  const { wallets } = useGetWallets();

  return (
    <Stack gap="md">
      <Typography variant="h2">Wallet</Typography>
      <WalletToolbar />
      <Grid.Row>
        {wallets?.map((wallet) => (
          <Grid.Col key={wallet.id} cols={4}>
            <WalletCard key={wallet.id} wallet={wallet} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </Stack>
  );
};
