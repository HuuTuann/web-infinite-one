import { cn } from "@/lib";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const TypographyBlockquote = (props: Props) => {
  const { children, className } = props;

  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
};
