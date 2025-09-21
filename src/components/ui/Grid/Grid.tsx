import { Stack } from "@/components-ui";
import { cn } from "@/lib";

import { GridCols, gridColsMap, GridColsValue } from "./Grid.helpers";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

type RowProps = {
  children: React.ReactNode;
  className?: string;
};

type ColProps = {
  children: React.ReactNode;
  className?: string;
  cols?: GridColsValue;
};

export const Grid = (props: GridProps) => {
  const { children, className } = props;

  return (
    <Stack gap="lg" className={className}>
      {children}
    </Stack>
  );
};

const Row = (props: RowProps) => {
  const { children, className } = props;
  return (
    <div className={cn("grid grid-cols-12 gap-4", className)}>{children}</div>
  );
};

const Col = (props: ColProps) => {
  const { children, className, cols = GridCols._6 } = props;

  return <div className={cn(gridColsMap[cols], className)}>{children}</div>;
};

Grid.Row = Row;
Grid.Col = Col;
