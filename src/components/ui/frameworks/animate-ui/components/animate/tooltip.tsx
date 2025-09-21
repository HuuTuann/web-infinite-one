import * as React from "react";

import * as motion from "motion/react-client";

import TooltipPrimitive, {
  type TooltipContentProps as TooltipContentPrimitiveProps,
  type TooltipProps as TooltipPrimitiveProps,
  type TooltipProviderProps as TooltipProviderPrimitiveProps,
  type TooltipTriggerProps as TooltipTriggerPrimitiveProps,
} from "@/frameworks-animate-ui/primitives/animate/tooltip";
import { cn } from "@/lib";

type TooltipProviderProps = TooltipProviderPrimitiveProps;

function TooltipProvider({ openDelay = 0, ...props }: TooltipProviderProps) {
  return <TooltipPrimitive.Provider openDelay={openDelay} {...props} />;
}

type TooltipProps = TooltipPrimitiveProps;

function Tooltip({ sideOffset = 10, ...props }: TooltipProps) {
  return <TooltipPrimitive sideOffset={sideOffset} {...props} />;
}

type TooltipTriggerProps = TooltipTriggerPrimitiveProps;

function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger {...props} />;
}

type TooltipContentProps = Omit<TooltipContentPrimitiveProps, "asChild"> & {
  children: React.ReactNode;
  layout?: boolean | "position" | "size" | "preserve-aspect";
};

function TooltipContent({
  className,
  children,
  layout = "preserve-aspect",
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Content
      className={cn(
        "bg-primary text-primary-foreground z-50 w-fit rounded-md",
        className
      )}
      {...props}
    >
      <motion.div className="overflow-hidden px-3 py-1.5 text-xs text-balance">
        <motion.div layout={layout}>{children}</motion.div>
      </motion.div>
      <TooltipPrimitive.Arrow
        className="fill-primary size-3 data-[side='bottom']:translate-y-[1px] data-[side='left']:translate-x-[-1px] data-[side='right']:translate-x-[1px] data-[side='top']:translate-y-[-1px]"
        tipRadius={2}
      />
    </TooltipPrimitive.Content>
  );
}

Tooltip.Content = TooltipContent;
Tooltip.Provider = TooltipProvider;
Tooltip.Trigger = TooltipTrigger;

export default Tooltip;

export type {
  TooltipContentProps,
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps,
};
