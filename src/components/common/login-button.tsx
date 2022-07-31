import React, { useContext } from "react";
import { useLogin } from "../../../modules/client/hooks/useLogin";
import { BBRRPClientContext } from "../../../modules/client/context";

const LoginButton: React.FC = () => {
  const { loggedIn } = useContext(BBRRPClientContext);
  const { login, logout } = useLogin();
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        !loggedIn ? login("admin1@admin.com", "password") : logout();
      }}
    >
      {!loggedIn ? "login" : "logout"}
    </button>
  );
};

export default LoginButton;
