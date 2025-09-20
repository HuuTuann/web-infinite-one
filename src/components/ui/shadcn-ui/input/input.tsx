import * as React from "react";

import { cn } from "@/lib";

export type InputProps = Omit<React.ComponentProps<"input">, "onChange"> & {
  onChange?: (value: string) => void;
};

function Input(props: InputProps) {
  const { type, className, value, onChange, ...restProps } = props;
  const [inputValue, setInputValue] = React.useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange?.(value);
    setInputValue(value);
  };

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring/30 focus-visible:ring-ring/20 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      value={inputValue}
      onChange={handleChange}
      {...restProps}
    />
  );
}

export { Input };
