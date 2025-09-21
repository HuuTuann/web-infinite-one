import { useState } from "react";

import { FieldValues, Path, useFormContext } from "react-hook-form";

import {
  FormShadcn,
  type InputProps,
  InputShadcn,
} from "@/frameworks-shadcn-ui";

type Props<T extends FieldValues> = InputProps & {
  name: Path<T>;
};

export const InputPassword = <T extends FieldValues>(props: Props<T>) => {
  const { name, ...restProps } = props;
  const { control } = useFormContext<T>();

  const [showPassword, _setShowPassword] = useState(false);

  return (
    <FormShadcn.Field
      name={name}
      control={control}
      render={({ field }) => (
        <FormShadcn.Item>
          <FormShadcn.Label>
            Password <span className="font-bold text-red-500">*</span>
          </FormShadcn.Label>
          <FormShadcn.Control>
            <InputShadcn
              {...field}
              {...restProps}
              type={showPassword ? "text" : "password"}
            />
          </FormShadcn.Control>
          <FormShadcn.Message />
        </FormShadcn.Item>
      )}
    />
  );
};
