import { FieldValues, Path, useFormContext, useWatch } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input as InputComponent,
  InputProps,
} from "@/shadcn-ui";

type Props<T extends FieldValues> = InputProps & {
  name: Path<T>;
  label: string;
  required?: boolean;
  description?: string;
  hiddenLabel?: boolean;
};

export const Input = <T extends FieldValues>(props: Props<T>) => {
  const { control } = useFormContext<T>();
  const { name, label, required, description, hiddenLabel, ...restProps } =
    props;

  const value = useWatch({ control, name });

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {!hiddenLabel && (
            <FormLabel className="gap-0.5">
              {label}
              {required && <span className="font-bold text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <InputComponent {...field} {...restProps} value={value} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
