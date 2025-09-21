import { Button, Card, Form, Grid } from "@/components";
import { AuthKeys } from "@/modules/auth/bases";

import { LoginFormValues } from "./Login.helpers";
import { useLoginForm } from "./useLoginForm";

export const Login = () => {
  const { form, isLoadingLogin, onSubmit } = useLoginForm();

  return (
    <Card
      title="Login to your account"
      description="Enter your email below to login to your account"
      className="w-full rounded-sm"
    >
      <Form<LoginFormValues>
        form={form}
        onSubmit={onSubmit}
        className="space-y-6"
      >
        <Grid>
          <Grid.Row>
            <Grid.Col cols={12}>
              <Form.Input
                name={AuthKeys.EMAIL}
                label="Email"
                placeholder="Enter your email"
              />
            </Grid.Col>
            <Grid.Col cols={12}>
              <Form.Input
                type="password"
                name={AuthKeys.PASSWORD}
                label="Password"
                placeholder="********"
              />
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col cols={12}>
              <Button
                type="submit"
                className="w-full"
                isLoading={isLoadingLogin}
              >
                Login
              </Button>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Form>
    </Card>
  );
};
