import { cn } from "@/lib";

import { Stack, Typography } from "..";

type ViewProps = {
  asChild?: boolean;
  children?: React.ReactNode;
  label?: string | React.ReactNode;
  value?: string | React.ReactNode;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
  leftIcon?: React.ReactNode;
};

export const View = (props: ViewProps) => {
  const {
    asChild,
    children,
    label,
    value,
    className,
    labelClassName,
    valueClassName,
    leftIcon,
  } = props;

  return (
    <Stack direction="row" align="center" className={className}>
      {leftIcon}
      {label && (
        <Typography.Muted className={cn("font-medium", labelClassName)}>
          {label}
        </Typography.Muted>
      )}
      {asChild ? (
        children
      ) : (
        <Typography className={cn("font-semibold", valueClassName)}>
          {value}
        </Typography>
      )}
    </Stack>
  );
};
