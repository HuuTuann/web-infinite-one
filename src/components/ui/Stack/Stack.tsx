import { memo, useMemo } from "react";

import { cn } from "@/lib";

import {
  stackAlignMap,
  StackDirection,
  stackDirectionMap,
  StackDirectionValue,
  StackGap,
  stackGapMap,
  StackGapValue,
  StackJustifyAlign,
  StackJustifyAlignValue,
  stackJustifyMap,
} from "./Stack.helpers";

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  gap?: StackGapValue;
  align?: StackJustifyAlignValue;
  justify?: StackJustifyAlignValue;
  direction?: StackDirectionValue;
}>;

export const Stack = memo((props: Props) => {
  const { children, className, gap, align, justify, direction } = props;

  const stackClassName = useMemo(() => {
    const stackDirection =
      stackDirectionMap[direction ?? StackDirection.COLUMN];
    const stackJustify = stackJustifyMap[justify ?? StackJustifyAlign.START];
    const stackAlign = stackAlignMap[align ?? StackJustifyAlign.STRETCH];
    const stackGap = stackGapMap[gap ?? StackGap.SM];

    return cn(
      "flex w-full",
      stackDirection,
      stackJustify,
      stackAlign,
      stackGap,
      className
    );
  }, [direction, justify, align, gap, className]);

  return <div className={stackClassName}>{children}</div>;
});

Stack.displayName = "Stack";
