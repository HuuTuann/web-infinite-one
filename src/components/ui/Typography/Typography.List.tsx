import { cn } from "@/lib";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TypographyList = (props: Props) => {
  const { children, className } = props;

  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
};

export const TypographyListItem = (props: Props) => {
  const { children, className } = props;

  return <li className={className}>{children}</li>;
};
