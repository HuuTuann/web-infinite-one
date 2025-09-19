import { FieldValues, Path, useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn-ui";

import { Stack } from "../../../stack";

type Props<T extends FieldValues> = {
  children: React.ReactNode;
  name: Path<T>;
  label: string;
  required?: boolean;
  description?: string;
  leftLabelSection?: React.ReactNode;
  rightLabelSection?: React.ReactNode;
};

export const Custom = <T extends FieldValues>(props: Props<T>) => {
  const { control } = useFormContext<T>();
  const {
    children,
    name,
    label,
    required,
    description,
    leftLabelSection,
    rightLabelSection,
  } = props;

  return (
    <FormField
      name={name}
      control={control}
      render={() => (
        <FormItem>
          <FormLabel className="flex items-center">
            {leftLabelSection}
            <Stack direction="row" className="gap-0.5">
              {label}
              {required && <span className="font-bold text-red-500">*</span>}
            </Stack>
            {rightLabelSection}
          </FormLabel>
          <FormControl>{children}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
