import { useMutation } from "@tanstack/react-query";
import AuthApis from "../query.apis";

export const useLogin = () => {
  const { mutate: onLogin, isPending } = useMutation({
    mutationFn: AuthApis.login,
  });

  return { onLogin, isPending };
};
