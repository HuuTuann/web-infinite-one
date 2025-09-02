import {
  Button,
  Card,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui/shadcn-ui";
import { AuthKeys } from "@/modules/auth/bases";

import { useLoginForm } from "./useLoginForm";

export const Login = () => {
  const { form, onSubmit } = useLoginForm();
  const { control } = form;

  return (
    <Card className="w-full rounded-sm">
      <Card.Header>
        <Card.Title>Login to your account</Card.Title>
        <Card.Description>
          Enter your email below to login to your account
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Form {...form}>
          <form noValidate onSubmit={onSubmit} className="space-y-6">
            <FormField
              control={control}
              name={AuthKeys.EMAIL}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name={AuthKeys.PASSWORD}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </Card.Content>
    </Card>
  );
};
