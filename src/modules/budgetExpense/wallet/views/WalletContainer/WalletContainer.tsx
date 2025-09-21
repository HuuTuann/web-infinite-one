"use client";

import { Card } from "@/components";

import { Wallet } from "../Wallet";
import { WalletToolbar } from "../WalletToolbar";

export const WalletContainer = () => {
  return (
    <Card title="Wallet">
      <div className="flex flex-col gap-4">
        <WalletToolbar />
        <Wallet />
      </div>
    </Card>
  );
};
