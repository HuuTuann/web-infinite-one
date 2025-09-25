import { memo } from "react";

import { Plus } from "lucide-react";

import { Button, Stack } from "@/components";
import { DialogSize, DialogType, useDialog } from "@/hooks";

import { AddEditWallet } from "../AddEditWallet";

export const WalletToolbar = memo(() => {
  const { showDialog } = useDialog();

  const handleAddWallet = () => {
    showDialog({
      type: DialogType.CONTENT,
      title: "Create New Wallet",
      content: <AddEditWallet />,
      options: { size: DialogSize.LARGE },
    });
  };

  return (
    <Stack direction="row" justify="end" gap="sm">
      <Button onClick={handleAddWallet} leftIcon={<Plus />}>
        New Wallet
      </Button>
    </Stack>
  );
});

WalletToolbar.displayName = "WalletToolbar";
