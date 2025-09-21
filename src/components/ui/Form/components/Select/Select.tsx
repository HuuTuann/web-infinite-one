import { FieldValues, Path, useFormContext, useWatch } from "react-hook-form";

import { Select as SelectComponent, SelectProps } from "@/components";
import { FormShadcn } from "@/frameworks-shadcn-ui";
import { isEmpty } from "@/lib";

type Props<T extends FieldValues> = SelectProps & {
  name: Path<T>;
  label?: string;
  required?: boolean;
  description?: string;
};

export const Select = <T extends FieldValues>(props: Props<T>) => {
  const { control } = useFormContext<T>();
  const { name, label, required, description, ...restProps } = props;

  const value = useWatch({ control, name });

  return (
    <FormShadcn.Field
      name={name}
      control={control}
      render={({ field, fieldState: { invalid } }) => (
        <FormShadcn.Item className="w-full">
          {!isEmpty(label) && (
            <FormShadcn.Label className="gap-0.5">
              {label}
              {required && <span className="font-bold text-red-500">*</span>}
            </FormShadcn.Label>
          )}
          <FormShadcn.Control>
            <SelectComponent
              aria-invalid={invalid}
              {...field}
              {...restProps}
              value={value}
            />
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
