import { FormEventHandler } from "react";

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

import { Stack } from "..";

import { Input, Select } from "./components";

type Props<T extends FieldValues> = {
  children: React.ReactNode;
  form: UseFormReturn<T>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const Form = <T extends FieldValues>(props: Props<T>) => {
  const { children, form, onSubmit } = props;

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={onSubmit}>
        <Stack gap="lg">{children}</Stack>
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.Select = Select;

export { Form };
