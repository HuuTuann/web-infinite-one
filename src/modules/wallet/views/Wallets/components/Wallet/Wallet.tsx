import { useRouter } from "next/navigation";

import { Clock, CreditCard, EllipsisVertical, Users } from "lucide-react";

import { Button, FormatValue, Stack, Typography } from "@/components";
import { Badge } from "@/components/ui/frameworks/re-ui";
import { formatCurrency, PATHS } from "@/lib";
import { GetWalletListResponse } from "@/modules/wallet/queries";

type Props = {
  wallet: GetWalletListResponse;
};

export const Wallet = ({ wallet }: Props) => {
  const router = useRouter();
  const {
    id,
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
      className="border-border rounded-lg border-2 bg-white p-4 transition-all duration-300 hover:shadow-md"
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
        <FormatValue.Date
          value={updatedAt}
          leftIcon={<Clock size={16} color="var(--muted-foreground)" />}
          dateMonthStyle="long"
          className="text-muted-foreground text-sm"
        />
        <Typography.Large>{formatCurrency(totalBalances)}</Typography.Large>
      </Stack>
      <Button
        className="mt-2 w-full"
        onClick={() => router.push(`${PATHS.walletDetail.replace(":id", id)}`)}
      >
        Open wallet
      </Button>
    </Stack>
  );
};
