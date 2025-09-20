"use client";

import * as React from "react";

import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn-ui";

import { SelectOption } from ".";

export type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  isNotClearable?: boolean;
  onChange?: (value: string) => void;
};

export const Select = (props: SelectProps) => {
  const { options, placeholder, value, isNotClearable, onChange } = props;

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
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              open && "border-ring/30 ring-ring/20 ring-[3px]"
            )}
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
            <div className={cn(selectedValue && "pl-6")}>
              <ChevronsUpDown className="opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        {!isNotClearable && selectedValue && (
          <X
            size={16}
            onClick={handleClear}
            className="absolute top-1/2 right-9 -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100"
          />
        )}
        <PopoverContent>
          <Command>
            <CommandInput placeholder="Search option..." className="h-9" />
            <CommandList>
              <CommandEmpty>No option found.</CommandEmpty>
              <CommandGroup>
                {options.map(({ value, label }) => (
                  <CommandItem
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
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
