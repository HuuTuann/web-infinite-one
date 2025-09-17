import { Plus } from "lucide-react";

import { Button } from "@/shadcn-ui";

export const WalletToolbar = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button>
        <Plus size={16} />
        Add Wallet
      </Button>
    </div>
  );
};
