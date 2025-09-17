import { Pencil, Wallet as WalletIcon } from "lucide-react";

import { formatCurrency } from "@/lib";
import { Badge, Button } from "@/re-ui";

const tempData = [
  {
    id: "1",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    name: "John Doe",
    baseCurrency: "USD",
    totalBalance: 1000,
    totalAccounts: 2,
    totalMembers: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const Wallet = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {tempData.map((item) => {
        const {
          name,
          baseCurrency,
          totalBalance,
          totalAccounts,
          totalMembers,
        } = item;

        return (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-lg border p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-secondary flex size-16 items-center justify-center rounded-lg">
                <WalletIcon size={36} />
              </div>
              <div className="flex flex-1 justify-between">
                <div className="flex flex-col items-start gap-1">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <Badge variant="secondary">{baseCurrency}</Badge>
                </div>
                <Button variant="outline" mode="icon">
                  <Pencil size={16} />
                </Button>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-muted-foreground text-sm">Total Balance:</p>
                <Badge variant="secondary" size="lg">
                  {formatCurrency(totalBalance)}
                </Badge>
              </div>
              <div className="grid grid-cols-2">
                <p className="text-muted-foreground text-sm">{`Total account: ${totalAccounts}`}</p>
                <p className="text-muted-foreground text-sm">{`Total member: ${totalMembers}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
