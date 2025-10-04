import { ColumnDef } from "@tanstack/react-table";

import { AccountsKeys } from "@/modules/wallet/base";
import { GetAccountsResponse } from "@/modules/wallet/queries";

const columns: ColumnDef<GetAccountsResponse>[] = [
  {
    header: "Account Name",
    accessorKey: AccountsKeys.NAME,
  },
  {
    header: "Currency",
    accessorKey: AccountsKeys.CURRENCY,
  },
  {
    header: "Opening Balance",
    accessorKey: AccountsKeys.OPENING_BALANCE,
  },
  {
    header: "Current Balance",
    accessorKey: AccountsKeys.CURRENT_BALANCE,
  },
  {
    header: "Status",
    accessorKey: AccountsKeys.IS_ACTIVE,
  },
  {
    header: "Created At",
    accessorKey: AccountsKeys.CREATED_AT,
  },
  {
    header: "Updated At",
    accessorKey: AccountsKeys.UPDATED_AT,
  },
  {
    header: "Total Transactions",
    accessorKey: AccountsKeys.TOTAL_TRANSACTIONS,
  },
];

export { columns };
