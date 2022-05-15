import { Nullable } from "@src/utilities/types";
import { AuthMutation } from "../interfaces/AuthMutation";

export const isLoginSuccess = (data: Nullable<AuthMutation>) => {
  return (
    data?.authenticateUserWithPassword?.__typename ===
    "UserAuthenticationWithPasswordSuccess"
  );
};
