import { cva } from "class-variance-authority";

import { cn } from "@/lib";

import { Stack } from "..";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean;
  children?: React.ReactNode;
  text?: string;
  className?: string;
  textClassName?: string;
  variant?: "default" | "info" | "success" | "warning" | "error" | "purple";
  size?: "lg" | "md" | "sm";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const badgeVariants = cva("rounded-lg", {
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-800",
      info: "bg-sky-100 text-sky-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
      purple: "bg-purple-100 text-purple-800",
    },
    size: {
      lg: "gap-1.5 px-3 py-2 text-base",
      md: "gap-1.5 px-2 py-1.5 text-sm",
      sm: "gap-1 px-2 py-1 text-xs leading-[0.75rem]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const Badge = (props: Props) => {
  const {
    asChild,
    children,
    className,
    variant,
    size,
    leftIcon,
    rightIcon,
    text,
    textClassName,
  } = props;

  if (asChild) {
    return (
      <Stack
        style={{ border: "1px solid rgba(0, 0, 0, 0.08)" }}
        className={cn(badgeVariants({ variant, size }), className)}
      >
        {children}
      </Stack>
    );
  }

  return (
    <Stack
      style={{ border: "1px solid rgba(0, 0, 0, 0.08)" }}
      className={cn(badgeVariants({ variant, size }), className)}
    >
      <Stack direction="row" align="center">
        {leftIcon}
        <p className={cn("font-semibold", textClassName)}>{text}</p>
        {rightIcon}
      </Stack>
    </Stack>
  );
};
