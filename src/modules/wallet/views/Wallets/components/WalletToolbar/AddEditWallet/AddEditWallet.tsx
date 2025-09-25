import { X } from "lucide-react";
import { useFieldArray } from "react-hook-form";

import { Button, Card, Form, Grid, Label, Stack, Tooltip } from "@/components";
import { useContent, useDialog } from "@/hooks";
import { convertToOptions } from "@/lib";
import { InvitedMembersKeys, WalletKeys } from "@/modules/wallet/base";
import {
  AddEditWalletFormHelpers,
  AddEditWalletFormValues,
  useAddEditWalletForm,
} from "@/modules/wallet/hookForm";

import { getPrefixInvitedMembers } from "./AddEditWallet.helpers";

export const AddEditWallet = () => {
  const { hideDialog } = useDialog();
  const { contents } = useContent();
  const { form, isLoadingCreateWallet, onSubmit } = useAddEditWalletForm();
  const { control } = form;
  const {
    fields: invitedMembersFields,
    append: appendInvitedMembers,
    remove: removeInvitedMembers,
  } = useFieldArray({
    control,
    name: WalletKeys.INVITED_MEMBERS,
  });

  const handleAddInvitedMember = () => {
    appendInvitedMembers(AddEditWalletFormHelpers.invitedMembersInitialValues);
  };

  const baseCurrencyOptions = convertToOptions(contents?.CURRENCY);
  const roleOptions = convertToOptions(contents?.WALLET_ROLE);

  return (
    <Form<AddEditWalletFormValues> form={form} onSubmit={onSubmit}>
      <Grid>
        <Grid.Row>
          <Grid.Col>
            <Form.Input
              required
              name={WalletKeys.NAME}
              label="Wallet Name"
              placeholder="Enter a wallet name"
            />
          </Grid.Col>
          <Grid.Col>
            <Form.Select
              required
              name={WalletKeys.BASE_CURRENCY_ID}
              label="Base Currency"
              options={baseCurrencyOptions}
              placeholder="Select a base currency"
            />
          </Grid.Col>

          <Grid.Col cols={12}>
            <Form.Custom
              name={WalletKeys.INVITED_MEMBERS}
              label="Invite Members"
              rightLabelSection={
                <Button size="sm" onClick={handleAddInvitedMember}>
                  New Member
                </Button>
              }
              description="Add members to the wallet"
            >
              <Card className="p-0" contentClassName="p-4">
                <Grid>
                  <Grid.Row>
                    <Grid.Col cols={4}>
                      <Label>Email</Label>
                    </Grid.Col>
                    <Grid.Col cols={4}>
                      <Label>Name</Label>
                    </Grid.Col>
                    <Grid.Col cols={3}>
                      <Label>Role</Label>
                    </Grid.Col>
                  </Grid.Row>
                  {invitedMembersFields.map(({ id }, index) => (
                    <Grid.Row key={id} className="items-start">
                      <Grid.Col cols={4}>
                        <Form.Select
                          placeholder="Select a base currency"
                          name={getPrefixInvitedMembers(
                            index,
                            InvitedMembersKeys.EMAIL
                          )}
                          options={[]}
                        />
                      </Grid.Col>
                      <Grid.Col cols={4}>
                        <Form.Input
                          placeholder="Enter a name"
                          name={getPrefixInvitedMembers(
                            index,
                            InvitedMembersKeys.NAME
                          )}
                        />
                      </Grid.Col>
                      <Grid.Col cols={3}>
                        <Form.Select
                          placeholder="Select a role"
                          name={getPrefixInvitedMembers(
                            index,
                            InvitedMembersKeys.ROLE
                          )}
                          options={roleOptions}
                        />
                      </Grid.Col>

                      <Grid.Col cols={1}>
                        <Tooltip
                          align="end"
                          {...(invitedMembersFields.length === 1 && {
                            content: "You cannot remove the last member",
                          })}
                        >
                          <Button
                            variant="outline"
                            onClick={() => removeInvitedMembers(index)}
                            disabled={invitedMembersFields.length === 1}
                          >
                            <X size={16} />
                          </Button>
                        </Tooltip>
                      </Grid.Col>
                    </Grid.Row>
                  ))}
                </Grid>
              </Card>
            </Form.Custom>
          </Grid.Col>
        </Grid.Row>

        <Stack direction="row" justify="end">
          <Button
            variant="outline"
            isLoading={isLoadingCreateWallet}
            onClick={hideDialog}
          >
            Cancel
          </Button>
          <Button type="submit" isLoading={isLoadingCreateWallet}>
            Add Wallet
          </Button>
        </Stack>
      </Grid>
    </Form>
  );
};
