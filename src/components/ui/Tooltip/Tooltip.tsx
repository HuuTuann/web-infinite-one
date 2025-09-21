import { Tooltip as TooltipAnimate } from "@/frameworks-animate-ui/components/animate";

type Props = React.ComponentProps<typeof TooltipAnimate> & {
  children: React.ReactNode;
  content?: React.ReactNode;
};

export const Tooltip = (props: Props) => {
  const { children, content, ...rest } = props;

  if (!content) return children;

  return (
    <TooltipAnimate.Provider>
      <TooltipAnimate {...rest}>
        <TooltipAnimate.Trigger>{children}</TooltipAnimate.Trigger>
        <TooltipAnimate.Content layout="size">{content}</TooltipAnimate.Content>
      </TooltipAnimate>
    </TooltipAnimate.Provider>
  );
};
