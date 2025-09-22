import { Clock, CreditCard, EllipsisVertical, Users } from "lucide-react";

import { Button, Stack, Typography } from "@/components";
import { Badge } from "@/components/ui/frameworks/re-ui";
import { formatCurrency, formatDate } from "@/lib";

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

export const WalletCard = () => {
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
                <Typography variant="h4">{name}</Typography>
                <Stack direction="row">
                  <Badge appearance="light">{baseCurrency}</Badge>
                  <Badge appearance="light">{baseCurrency}</Badge>
                </Stack>
              </Stack>
              <Button variant="outline" size="icon">
                <EllipsisVertical size={16} />
              </Button>
            </Stack>
            <Stack direction="row" justify="between" align="center">
              <Stack direction="row" align="center">
                <CreditCard size={16} color="var(--muted-foreground)" />
                <Typography.Muted>{`${totalAccounts} accounts`}</Typography.Muted>
              </Stack>
              <Stack direction="row" align="center" justify="end">
                <Users size={16} color="var(--muted-foreground)" />
                <Typography.Muted>{`${totalMembers} members`}</Typography.Muted>
              </Stack>
            </Stack>
            <Stack direction="row" justify="between" align="center">
              <Stack direction="row" align="center">
                <Clock size={16} color="var(--muted-foreground)" />
                <Typography.Muted>{`Updated ${formatDate(createdAt)}`}</Typography.Muted>
              </Stack>
              <Typography.Large>
                {formatCurrency(totalBalance)}
              </Typography.Large>
            </Stack>
            <Button className="mt-2 w-full">Open wallet</Button>
          </Stack>
        );
      })}
    </div>
  );
};
