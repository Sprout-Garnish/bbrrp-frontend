import { useMutation } from "@apollo/client";
import { Nullable } from "@src/utilities/types";
import { AUTH_MUTATION } from "../graphql/auth";
import {
  AuthMutation,
  AuthMutationVariables,
} from "../interfaces/AuthMutation";

const isLoginSuccess = (data: Nullable<AuthMutation>) => {
  return (
    data?.authenticateUserWithPassword?.__typename ===
    "UserAuthenticationWithPasswordSuccess"
  );
};

/**
 * @description THIS FETCHER IS DEV ONLY
 */
export const useDevLogin = () => {
  const [authMutation, { loading, data: result }] = useMutation<
    AuthMutation,
    AuthMutationVariables
  >(AUTH_MUTATION);

  const login = async () => {
    const Credentials = require("@private/credentials");
    const res = await authMutation({
      variables: {
        ...Credentials,
      },
    });
    return isLoginSuccess(res?.data);
  };

  const logout = async () => {};

  return {
    login,
    logout,
    loading,
    success: isLoginSuccess(result),
  };
};
