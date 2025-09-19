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
};

export const Input = <T extends FieldValues>(props: Props<T>) => {
  const { control } = useFormContext<T>();
  const { name, label, required, description, ...restProps } = props;

  const value = useWatch({ control, name });

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="gap-0.5">
            {label}
            {required && <span className="text-red-500">*</span>}
          </FormLabel>
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
