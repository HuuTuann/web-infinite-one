import { Plus } from "lucide-react";

import { DialogSize, DialogType, useDialog } from "@/hooks";
import { Stack } from "@/io-ui";
import { Button } from "@/shadcn-ui";

import { AddEditWallet } from "./AddEditWallet/AddEditWallet";

export const WalletToolbar = () => {
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
      <Button onClick={handleAddWallet}>
        <Plus size={16} />
        New Wallet
      </Button>
    </Stack>
  );
};
