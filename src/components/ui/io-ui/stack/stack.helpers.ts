enum StackDirection {
  ROW = "row",
  COLUMN = "col",
  ROW_REVERSE = "row-reverse",
  COLUMN_REVERSE = "col-reverse",
}

enum StackJustifyAlign {
  START = "start",
  CENTER = "center",
  END = "end",
  BETWEEN = "between",
  AROUND = "around",
  EVENLY = "evenly",
}

enum StackGap {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "xxl",
}

type StackGapValue = "sm" | "md" | "lg" | "xl" | "xxl";

type StackDirectionValue = "row" | "col" | "row-reverse" | "col-reverse";

type StackJustifyAlignValue =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly";

const stackDirectionMap: Record<StackDirectionValue, string> = {
  [StackDirection.ROW]: "flex-row",
  [StackDirection.COLUMN]: "flex-col",
  [StackDirection.ROW_REVERSE]: "flex-row-reverse",
  [StackDirection.COLUMN_REVERSE]: "flex-col-reverse",
};

const stackJustifyMap: Record<StackJustifyAlignValue, string> = {
  [StackJustifyAlign.START]: "justify-start",
  [StackJustifyAlign.CENTER]: "justify-center",
  [StackJustifyAlign.END]: "justify-end",
  [StackJustifyAlign.BETWEEN]: "justify-between",
  [StackJustifyAlign.AROUND]: "justify-around",
  [StackJustifyAlign.EVENLY]: "justify-evenly",
};

const stackAlignMap: Record<StackJustifyAlignValue, string> = {
  [StackJustifyAlign.START]: "items-start",
  [StackJustifyAlign.CENTER]: "items-center",
  [StackJustifyAlign.END]: "items-end",
  [StackJustifyAlign.BETWEEN]: "items-between",
  [StackJustifyAlign.AROUND]: "items-around",
  [StackJustifyAlign.EVENLY]: "items-evenly",
};

const stackGapMap: Record<StackGapValue, string> = {
  [StackGap.SM]: "gap-2",
  [StackGap.MD]: "gap-4",
  [StackGap.LG]: "gap-6",
  [StackGap.XL]: "gap-8",
  [StackGap.XXL]: "gap-10",
};

export {
  stackAlignMap,
  StackDirection,
  stackDirectionMap,
  StackGap,
  stackGapMap,
  StackJustifyAlign,
  stackJustifyMap,
};
export type { StackDirectionValue, StackGapValue, StackJustifyAlignValue };
