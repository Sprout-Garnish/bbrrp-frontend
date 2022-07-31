import { Nullable } from "@src/utilities/types";
import { AuthMutation } from "../graphql/generated/schema";

export const isLoginSuccess = (data: Nullable<AuthMutation>) => {
  return (
    data?.authenticateUserWithPassword?.__typename ===
    "UserAuthenticationWithPasswordSuccess"
  );
};
