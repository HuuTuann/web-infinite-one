import { FormEventHandler } from "react";

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

import { Select } from "./components";

// export type HandleSubmit<T extends FieldValues> = (
//   onValid: (data: T) => void,
//   onInvalid?: (errors: FieldErrors<T>) => void
// ) => void;

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
        {children}
      </form>
    </FormProvider>
  );
};

Form.Select = Select;

export { Form };
