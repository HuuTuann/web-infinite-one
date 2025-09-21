import { X } from "lucide-react";
import { useFieldArray } from "react-hook-form";

import { Button, Card, Form, Grid, Label } from "@/components";
import { useContent } from "@/hooks";
import { convertToOptions } from "@/lib";

import { InvitedMembersKeys, WalletKeys } from "../../base";
import {
  AddEditWalletFormHelpers,
  AddEditWalletFormValues,
  useAddEditWalletForm,
} from "../../hookForm";

import { getPrefixInvitedMembers } from "./AddEditWallet.helpers";

export const AddEditWallet = () => {
  const { contents } = useContent();
  const { form, onSubmit } = useAddEditWalletForm();
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
              name={WalletKeys.BASE_CURRENCY}
              label="Base Currency"
              options={baseCurrencyOptions}
              placeholder="Select a base currency"
              isLoading={true}
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
                          label="Email"
                          placeholder="Select a base currency"
                          name={getPrefixInvitedMembers(
                            index,
                            InvitedMembersKeys.EMAIL
                          )}
                          options={[]}
                          hiddenLabel
                        />
                      </Grid.Col>
                      <Grid.Col cols={4}>
                        <Form.Input
                          label="Name"
                          placeholder="Enter a name"
                          name={getPrefixInvitedMembers(
                            index,
                            InvitedMembersKeys.NAME
                          )}
                          hiddenLabel
                        />
                      </Grid.Col>
                      <Grid.Col cols={3}>
                        <Form.Select
                          label="Role"
                          placeholder="Select a role"
                          name={getPrefixInvitedMembers(
                            index,
                            InvitedMembersKeys.ROLE
                          )}
                          hiddenLabel
                          options={roleOptions}
                        />
                      </Grid.Col>

                      <Grid.Col cols={1}>
                        <Button
                          variant="outline"
                          onClick={() => removeInvitedMembers(index)}
                          disabled={invitedMembersFields.length === 1}
                        >
                          <X size={16} />
                        </Button>
                      </Grid.Col>
                    </Grid.Row>
                  ))}
                </Grid>
              </Card>
            </Form.Custom>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </Form>
  );
};
