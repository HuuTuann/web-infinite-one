import { Button, Form, Grid, Stack } from "@/components";
import { useContent, useDialog } from "@/hooks";
import { convertToOptions } from "@/lib";
import { AccountsKeys } from "@/modules/wallet/base";
import {
  AddEditAccountFormValues,
  useAddEditAccountForm,
} from "@/modules/wallet/hookForm";

type Props = {
  walletId: string;
  accountId?: string;
};

export const AddEditAccount = (props: Props) => {
  const { walletId, accountId } = props;
  const { hideDialog } = useDialog();
  const { contents } = useContent();
  const { form, isLoadingCreateAccount, onSubmit } = useAddEditAccountForm(
    walletId,
    accountId
  );

  const currencyOptions = convertToOptions(contents?.CURRENCY);

  return (
    <Form<AddEditAccountFormValues> form={form} onSubmit={onSubmit}>
      <Grid className="gap-5">
        <Grid.Row>
          <Grid.Col cols={12}>
            <Form.Input
              required
              name={AccountsKeys.NAME}
              label="Name"
              placeholder="Enter a name"
            />
          </Grid.Col>
          <Grid.Col cols={12}>
            <Form.Select
              required
              name={AccountsKeys.CURRENCY_ID}
              label="Currency"
              options={currencyOptions}
              placeholder="Select a currency"
            />
          </Grid.Col>
          <Grid.Col cols={12}>
            <Form.Input
              name={AccountsKeys.OPENING_BALANCE}
              label="Opening Balance"
              placeholder="Enter a opening balance"
            />
          </Grid.Col>
        </Grid.Row>

        <Stack direction="row" justify="end">
          <Button
            variant="outline"
            isLoading={isLoadingCreateAccount}
            onClick={hideDialog}
          >
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoadingCreateAccount}>
            Add Wallet
          </Button>
        </Stack>
      </Grid>
    </Form>
  );
};
