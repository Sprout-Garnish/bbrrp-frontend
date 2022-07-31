import { useContext } from "react";
import { BBRRPClientContext } from "../context";
import { useAuthMutation } from "../graphql/generated/schema";
import { isLoginSuccess } from "../shared/helpers";

export const useLogin = () => {
  const { setCredentials } = useContext(BBRRPClientContext);
  const [authMutation, { loading, data: result }] = useAuthMutation();

  const login = async (email: string, password: string) => {
    const res = await authMutation({
      variables: {
        email,
        password,
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
