import { cn } from "@/lib";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TypographySmall = (props: Props) => {
  const { children, className } = props;

  return (
    <p className={cn("text-sm leading-none font-medium", className)}>
      {children}
    </p>
  );
};
