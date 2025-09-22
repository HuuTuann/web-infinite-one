import { cn } from "@/lib";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TypographyLarge = (props: Props) => {
  const { children, className } = props;

  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
};
