import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TableShadcn } from "@/frameworks-shadcn-ui";
import { cn } from "@/lib";

import { Scroll } from "..";

type Props<TData, TValue> = {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  className?: string;
};

export const Table = <TData, TValue>(props: Props<TData, TValue>) => {
  const { data, columns, className } = props;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Scroll.Area
      className={cn(
        "max-h-96 w-full overflow-hidden rounded-lg border-[1px]",
        className
      )}
    >
      <TableShadcn>
        <TableShadcn.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableShadcn.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableShadcn.Head
                    key={header.id}
                    className="bg-gray-100 font-semibold first:pl-3 last:pr-3 last:text-right"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableShadcn.Head>
                );
              })}
            </TableShadcn.Row>
          ))}
        </TableShadcn.Header>
        <TableShadcn.Body>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableShadcn.Row
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableShadcn.Cell
                    key={cell.id}
                    className="first:pl-3 last:pr-3 last:text-right"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableShadcn.Cell>
                ))}
              </TableShadcn.Row>
            ))
          ) : (
            <TableShadcn.Row>
              <TableShadcn.Cell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </TableShadcn.Cell>
            </TableShadcn.Row>
          )}
        </TableShadcn.Body>
      </TableShadcn>
      <Scroll.Bar orientation="vertical" />
      <Scroll.Bar orientation="horizontal" />
    </Scroll.Area>
  );
};
