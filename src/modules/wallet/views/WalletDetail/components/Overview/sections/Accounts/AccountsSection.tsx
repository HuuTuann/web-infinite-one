import { useParams } from "next/navigation";

import { Card, Stack, Table, Typography } from "@/components";
import { WalletKeys } from "@/modules/wallet/base";
import { useGetAccounts } from "@/modules/wallet/queries";

import { columns } from "./AccountTable/AccountTable.column";

export const AccountsSection = () => {
  const { id } = useParams<{ id: string }>();
  const { accounts } = useGetAccounts({
    initialParams: {
      [WalletKeys.ID]: id,
    },
  });

  return (
    <Stack className="p-2">
      <Card contentClassName="space-y-4">
        <Typography variant="h3">Accounts</Typography>
        <Table columns={columns} data={accounts} />
      </Card>
    </Stack>
  );
};
