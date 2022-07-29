import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { BBRRPClientContext } from "../context";
import {
  AuthDocument,
  AuthMutation,
  AuthMutationVariables,
} from "../graphql/generated/schema";
import { isLoginSuccess } from "../shared/helpers";

export const useLogin = () => {
  const { setLoggedIn } = useContext(BBRRPClientContext);
  const [authMutation, { loading, data: result }] = useMutation<
    AuthMutation,
    AuthMutationVariables
  >(AuthDocument);

  const login = async (email: string, password: string) => {
    const res = await authMutation({
      variables: {
        email,
        password,
      },
    });
    const success = isLoginSuccess(res?.data);
    if (success) {
      alert("Login success");
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
