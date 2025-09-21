"use client";

import { FormEventHandler } from "react";

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

import { Stack } from "../Stack";

import { Custom, Input, Select } from "./components";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  children: React.ReactNode;
  className?: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const Form = <T extends FieldValues>(props: Props<T>) => {
  const { children, form, className, onSubmit } = props;

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={onSubmit}>
        <Stack gap="lg" className={className}>
          {children}
        </Stack>
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.Select = Select;
Form.Custom = Custom;
