import { useMutation } from "@apollo/client";
import { Nullable } from "@src/utilities/types";
import { useContext } from "react";
import { BBRRPClientContext } from "../context";
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
 * @description THIS HOOK IS DEV ONLY
 */
export const useDevLogin = () => {
  const { setLoggedIn } = useContext(BBRRPClientContext);
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
    const success = isLoginSuccess(res?.data);
    if (success) {
      setLoggedIn(true);
    } else {
      alert("Login failed");
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  return {
    login,
    logout,
    loading,
    success: isLoginSuccess(result),
  };
};
