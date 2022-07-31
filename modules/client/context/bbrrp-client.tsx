import { Nullable } from "@src/utilities/types";
import React, { useState } from "react";

interface ICredentials {
  name?: string | null;
  id: string;
}

interface IBBRRPClientContext {
  loggedIn: boolean;
  setCredentials: (credentials: Nullable<ICredentials>) => void;
  credentials: Nullable<ICredentials>;
  userId: Nullable<string>;
}

export const BBRRPClientContext = React.createContext<IBBRRPClientContext>({
  loggedIn: false,
  setCredentials: () => {},
  credentials: null,
  userId: null,
});

export const BBRRPClientProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<Nullable<ICredentials>>(null);
  const context: IBBRRPClientContext = {
    credentials,
    setCredentials,
    userId: credentials?.id ?? null,
    loggedIn: !!credentials,
  };
  return (
    <BBRRPClientContext.Provider value={context}>
      {children}
    </BBRRPClientContext.Provider>
  );
};
