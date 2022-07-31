import { useContext } from "react";
import { BBRRPClientContext } from "../context";
import { useAuthMutation } from "../graphql/generated/schema";
import { isLoginSuccess } from "../shared/helpers";

export const useDevLogin = () => {
  const { setCredentials } = useContext(BBRRPClientContext);
  const [authMutation, { loading, data: result }] = useAuthMutation();

  const login = async () => {
    const Credentials = require("@private/credentials");
    const res = await authMutation({
      variables: {
        ...Credentials,
      },
    });
    if (
      res.data?.authenticateUserWithPassword?.__typename ===
      "UserAuthenticationWithPasswordSuccess"
    ) {
      alert("Login success");
      setCredentials(res.data?.authenticateUserWithPassword.item);
    } else {
      alert("Login failed");
    }
  };

  const logout = () => {
    setCredentials(null);
  };

  return {
    login,
    logout,
    loading,
    success: isLoginSuccess(result),
  };
};
