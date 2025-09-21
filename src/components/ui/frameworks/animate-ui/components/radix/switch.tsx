import * as React from "react";

import {
  SwitchPrimitive,
  type SwitchProps as SwitchPrimitiveProps,
} from "@/frameworks-animate-ui/primitives/radix";
import { cn } from "@/lib";

type SwitchProps = SwitchPrimitiveProps & {
  pressedWidth?: number;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  thumbIcon?: React.ReactElement;
};

function Switch({
  className,
  pressedWidth = 19,
  startIcon,
  endIcon,
  thumbIcon,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive
      className={cn(
        "peer focus-visible:border-ring focus-visible:ring-ring/50 relative flex h-5 w-8 shrink-0 items-center justify-start rounded-full border border-transparent px-px shadow-xs outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80 data-[state=checked]:justify-end",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none relative z-10 block size-4 rounded-full ring-0"
        )}
        pressedAnimation={{ width: pressedWidth }}
      >
        {thumbIcon && (
          <SwitchPrimitive.Icon
            position="thumb"
            className="absolute top-1/2 left-1/2 -translate-1/2 text-neutral-400 dark:text-neutral-500 [&_svg]:size-[9px]"
          >
            {thumbIcon}
          </SwitchPrimitive.Icon>
        )}
      </SwitchPrimitive.Thumb>

      {startIcon && (
        <SwitchPrimitive.Icon
          position="left"
          className="absolute top-1/2 left-0.5 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 [&_svg]:size-[9px]"
        >
          {startIcon}
        </SwitchPrimitive.Icon>
      )}
      {endIcon && (
        <SwitchPrimitive.Icon
          position="right"
          className="absolute top-1/2 right-0.5 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 [&_svg]:size-[9px]"
        >
          {endIcon}
        </SwitchPrimitive.Icon>
      )}
    </SwitchPrimitive>
  );
}

export default Switch;
export type { SwitchProps };
