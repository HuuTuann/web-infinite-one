import { FieldValues, Path, useFormContext } from "react-hook-form";

import { Stack } from "@/components-ui";
import { FormShadcn } from "@/frameworks-shadcn-ui";

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
    <FormShadcn.Field
      name={name}
      control={control}
      render={() => (
        <FormShadcn.Item>
          <FormShadcn.Label className="flex items-center">
            {leftLabelSection}
            <Stack direction="row" className="gap-0.5">
              {label}
              {required && <span className="font-bold text-red-500">*</span>}
            </Stack>
            {rightLabelSection}
          </FormShadcn.Label>
          <FormShadcn.Control>{children}</FormShadcn.Control>
          {description && (
            <FormShadcn.Description>{description}</FormShadcn.Description>
          )}
          <FormShadcn.Message />
        </FormShadcn.Item>
      )}
    />
  );
};
