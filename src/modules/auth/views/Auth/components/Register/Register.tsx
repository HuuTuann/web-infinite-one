import { Button, Card, Form, Grid } from "@/components";
import { AuthKeys } from "@/modules/auth/bases";

import { RegisterFormValues } from "./Register.helpers";
import { useRegisterForm } from "./useRegisterForm";

export const Register = () => {
  const { form, isLoadingRegister, onSubmit } = useRegisterForm();

  return (
    <Card
      title="Create a new account"
      description="Enter your email and password below to create a new account"
      className="w-full rounded-sm"
    >
      <Form<RegisterFormValues> form={form} onSubmit={onSubmit}>
        <Grid className="gap-6">
          <Grid.Row>
            <Grid.Col cols={12}>
              <Form.Input
                name={AuthKeys.NAME}
                label="Name"
                placeholder="Enter your name"
              />
            </Grid.Col>
            <Grid.Col cols={12}>
              <Form.Input
                name={AuthKeys.EMAIL}
                label="Email"
                placeholder="Enter your email"
              />
            </Grid.Col>
            <Grid.Col cols={12}>
              <Form.Input
                name={AuthKeys.PASSWORD}
                label="Password"
                placeholder="********"
              />
            </Grid.Col>
            <Grid.Col cols={12}>
              <Form.Input
                name={AuthKeys.CONFIRM_PASSWORD}
                label="Confirm Password"
                placeholder="********"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col cols={12}>
              <Button
                type="submit"
                className="w-full"
                isLoading={isLoadingRegister}
              >
                Register
              </Button>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Form>
    </Card>
  );
};
