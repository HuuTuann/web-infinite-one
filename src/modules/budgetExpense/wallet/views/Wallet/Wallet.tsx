import { Clock, CreditCard, EllipsisVertical, Users } from "lucide-react";

import { Stack } from "@/io-ui";
import { formatCurrency, formatDate } from "@/lib";
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
          createdAt,
        } = item;

        return (
          <Stack
            key={item.id}
            gap="sm"
            className="rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Stack direction="row" justify="between" className="pb-4">
              <Stack>
                <h3 className="text-lg font-semibold">{name}</h3>
                <Stack direction="row">
                  <Badge appearance="light">{baseCurrency}</Badge>
                  <Badge appearance="light">{baseCurrency}</Badge>
                </Stack>
              </Stack>
              <Button variant="outline" mode="icon">
                <EllipsisVertical size={16} />
              </Button>
            </Stack>
            <Stack direction="row" justify="between" align="center">
              <Stack direction="row" align="center">
                <CreditCard size={16} color="var(--muted-foreground)" />
                <p className="text-muted-foreground text-sm">{`${totalAccounts} accounts`}</p>
              </Stack>
              <Stack direction="row" align="center" justify="end">
                <Users size={16} color="var(--muted-foreground)" />
                <p className="text-muted-foreground text-sm">{`${totalMembers} members`}</p>
              </Stack>
            </Stack>
            <Stack direction="row" justify="between" align="center">
              <Stack direction="row" align="center">
                <Clock size={16} color="var(--muted-foreground)" />
                <p className="text-muted-foreground text-sm">{`Updated ${formatDate(createdAt)}`}</p>
              </Stack>
              <p className="text-lg font-semibold">
                {formatCurrency(totalBalance)}
              </p>
            </Stack>
            <Button className="mt-2 w-full">Open wallet</Button>
          </Stack>
        );
      })}
    </div>
  );
};
