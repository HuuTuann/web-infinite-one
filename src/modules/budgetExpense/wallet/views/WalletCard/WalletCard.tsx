import { Clock, CreditCard, EllipsisVertical, Users } from "lucide-react";

import { Button, Stack, Typography } from "@/components";
import { Badge } from "@/components/ui/frameworks/re-ui";
import { formatCurrency, formatDate } from "@/lib";

import { GetWalletListResponse } from "../../queries";

type Props = {
  wallet: GetWalletListResponse;
};

export const WalletCard = ({ wallet }: Props) => {
  const {
    name,
    role,
    baseCurrency,
    totalBalances,
    totalAccounts,
    totalMembers,
    updatedAt,
  } = wallet;

  return (
    <Stack
      gap="sm"
      className="rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <Stack direction="row" justify="between" className="pb-4">
        <Stack>
          <Typography variant="h4">{name}</Typography>
          <Stack direction="row">
            <Badge appearance="light">{baseCurrency}</Badge>
            <Badge appearance="light">{role}</Badge>
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
          <Typography.Muted>{`Updated ${formatDate(new Date(updatedAt))}`}</Typography.Muted>
        </Stack>
        <Typography.Large>{formatCurrency(totalBalances)}</Typography.Large>
      </Stack>
      <Button className="mt-2 w-full">Open wallet</Button>
    </Stack>
  );
};
