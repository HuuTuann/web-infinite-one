import { memo } from "react";
import { useParams } from "next/navigation";

import { BadgeCheck, Clock, CreditCard, Users } from "lucide-react";

import {
  Badge,
  Button,
  Card,
  FormatValue,
  Stack,
  Typography,
  View,
} from "@/components";
import { formatCurrency } from "@/lib";
import { useGetWalletGeneral } from "@/modules/wallet/queries";

export const General = memo(() => {
  const { id } = useParams<{ id: string }>();

  const { walletGeneral } = useGetWalletGeneral({ id });
  const {
    name,
    role,
    baseCurrency,
    totalBalances,
    totalAccounts,
    totalMembers,
    updatedAt,
    createdAt,
  } = walletGeneral || {};

  return (
    <Card>
      <Stack gap="md">
        <Stack direction="row" justify="between">
          <Stack>
            <Stack direction="row" align="center">
              <Typography variant="h2">{name}</Typography>
              <Badge
                variant="success"
                text={formatCurrency(totalBalances || 0)}
              />
            </Stack>
            <Stack direction="row">
              <Badge
                variant="purple"
                leftIcon={<BadgeCheck size={16} />}
                text={role}
              />
              <Badge variant="info" text={baseCurrency} />
            </Stack>
          </Stack>

          <Stack direction="row">
            <Button disabled>Invite Members</Button>
            <Button disabled>New Account</Button>
          </Stack>
        </Stack>

        <Badge asChild className="p-4">
          <Stack
            style={{ borderBottom: "2px solid rgba(0, 0, 0, 0.08)" }}
            className="pb-4"
          >
            <View
              label="Total Accounts:"
              value={totalAccounts}
              leftIcon={
                <CreditCard size={20} color="var(--muted-foreground)" />
              }
            />
            <View
              label="Total Members:"
              value={totalMembers}
              leftIcon={<Users size={20} color="var(--muted-foreground)" />}
            />
            <View
              asChild
              label="Updated at:"
              leftIcon={<Clock size={20} color="var(--muted-foreground)" />}
            >
              <FormatValue.Date
                showTime
                value={updatedAt}
                dateMonthStyle="full"
              />
            </View>
          </Stack>
          <Stack direction="row" align="center" justify="between">
            <View asChild label="Created at:" className="text-sm italic">
              <FormatValue.Date
                showTime
                value={createdAt}
                dateMonthStyle="full"
                valueClassName="font-medium"
              />
            </View>
            <View asChild label="Async at:" className="text-sm italic">
              <FormatValue.Date
                showTime
                value={new Date()}
                dateMonthStyle="full"
                valueClassName="font-medium"
              />
            </View>
          </Stack>
        </Badge>
      </Stack>
    </Card>
  );
});

General.displayName = "General";
