"use client";

import * as React from "react";

import { Check, X } from "lucide-react";
import { BarLoader } from "react-spinners";

import { Stack } from "@/components";
import {
  ButtonShadcn,
  CommandShadcn,
  PopoverShadcn,
} from "@/frameworks-shadcn-ui";
import { cn, isEmpty } from "@/lib";

import { SelectOption } from "./Select.helpers";

export type SelectProps = Omit<React.ComponentProps<"button">, "onChange"> & {
  options: SelectOption[];
  isLoading?: boolean;
  placeholder?: string;
  value?: string;
  isNotClearable?: boolean;
  onChange?: (value: string) => void;
};

export const Select = (props: SelectProps) => {
  const {
    options,
    isLoading,
    placeholder,
    value,
    isNotClearable,
    onChange,
    ...restProps
  } = props;

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleChange = (value: string) => {
    onChange?.(value);
    setSelectedValue(value);
    setOpen(false);
  };

  const handleClear = () => {
    onChange?.("");
    setSelectedValue("");
  };

  return (
    <div className="relative -m-[3px] w-full overflow-hidden p-[3px]">
      <PopoverShadcn open={open} onOpenChange={setOpen}>
        <PopoverShadcn.Trigger asChild>
          <ButtonShadcn
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              open && "border-ring/30 ring-ring/20 ring-[3px]"
            )}
            {...restProps}
          >
            <p
              className={cn(
                "w-full overflow-hidden text-left font-normal text-ellipsis",
                !selectedValue && "text-muted-foreground"
              )}
            >
              {selectedValue
                ? options.find(({ value }) => value === selectedValue)?.label
                : (placeholder ?? "Select an option")}
            </p>
            <div className={cn(selectedValue && "pl-6")} />
          </ButtonShadcn>
        </PopoverShadcn.Trigger>
        {!isNotClearable && selectedValue && (
          <X
            size={16}
            onClick={handleClear}
            className="absolute top-1/2 right-9 -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100"
          />
        )}
        <PopoverShadcn.Content>
          {isLoading ? (
            <Stack justify="center" align="center" className="p-6">
              <p className="text-muted-foreground text-sm font-semibold">
                Loading...
              </p>
              <BarLoader color="var(--primary)" />
            </Stack>
          ) : (
            <CommandShadcn>
              {!isEmpty(options) && (
                <CommandShadcn.Input
                  placeholder="Search option..."
                  className="h-9"
                />
              )}
              <CommandShadcn.List>
                <CommandShadcn.Empty className="flex flex-col items-center justify-center py-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/empty-data.svg" alt="No data" className="h-20" />
                  <p className="text-muted-foreground text-center text-sm font-semibold">
                    No option found.
                  </p>
                </CommandShadcn.Empty>
                <CommandShadcn.Group>
                  {options.map(({ value, label }) => (
                    <CommandShadcn.Item
                      key={value}
                      value={value}
                      onSelect={handleChange}
                    >
                      <p className="w-full overflow-hidden text-left text-ellipsis">
                        {label}
                      </p>
                      <Check
                        className={cn(
                          "ml-auto",
                          value === selectedValue ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandShadcn.Item>
                  ))}
                </CommandShadcn.Group>
              </CommandShadcn.List>
            </CommandShadcn>
          )}
        </PopoverShadcn.Content>
      </PopoverShadcn>
    </div>
  );
};
