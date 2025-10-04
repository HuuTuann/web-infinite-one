import { Table } from "@/components";
import { useGetAccounts } from "@/modules/wallet/queries";

import { columns } from "./AccountTable.column";

export const AccountTable = () => {
  const { accounts } = useGetAccounts();
  return <Table columns={columns} data={accounts} />;
};
