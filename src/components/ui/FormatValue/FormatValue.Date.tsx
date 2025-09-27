import { cn } from "@/lib";

import { Stack, Typography } from "..";

enum MonthStyle {
  Full = "full",
  Long = "long",
  Medium = "medium",
}

const monthStyleMap: Record<
  MonthStyle,
  Pick<Intl.DateTimeFormatOptions, "month">
> = {
  [MonthStyle.Full]: { month: "long" },
  [MonthStyle.Long]: { month: "short" },
  [MonthStyle.Medium]: { month: "2-digit" },
};

type Props = {
  value?: string | Date;
  dateMonthStyle?: "full" | "long" | "medium";
  showTime?: boolean;
  className?: string;
  valueClassName?: string;
  leftIcon?: React.ReactNode;
};

export const FormatDateValue = (props: Props) => {
  const {
    value,
    dateMonthStyle = "medium",
    showTime,
    className,
    valueClassName,
    leftIcon,
  } = props;

  if (!value) return "--";

  const locale = "en-US";
  const dateObj = value instanceof Date ? value : new Date(value);

  return (
    <Stack direction="row" align="center" className={className}>
      {leftIcon}
      <Typography className={cn("font-semibold", valueClassName)}>
        {new Intl.DateTimeFormat(locale, {
          year: "numeric",
          ...monthStyleMap[dateMonthStyle],
          day: "2-digit",
          ...(showTime && {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        }).format(dateObj)}
      </Typography>
    </Stack>
  );
};
