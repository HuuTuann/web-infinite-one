import { FieldValues, Path, useFormContext, useWatch } from "react-hook-form";

import {
  FormShadcn,
  type InputProps,
  InputShadcn,
} from "@/frameworks-shadcn-ui";

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
    <FormShadcn.Field
      name={name}
      control={control}
      render={({ field }) => (
        <FormShadcn.Item>
          {!hiddenLabel && (
            <FormShadcn.Label className="gap-0.5">
              {label}
              {required && <span className="font-bold text-red-500">*</span>}
            </FormShadcn.Label>
          )}
          <FormShadcn.Control>
            <InputShadcn {...field} {...restProps} value={value} />
          </FormShadcn.Control>
          {description && (
            <FormShadcn.Description>{description}</FormShadcn.Description>
          )}
          <FormShadcn.Message />
        </FormShadcn.Item>
      )}
    />
  );
};
