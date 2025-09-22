import { cn } from "@/lib";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TypographyMuted = (props: Props) => {
  const { children, className } = props;

  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  );
};
