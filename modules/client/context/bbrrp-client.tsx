import React, { useState } from "react";

interface IBBRRPClientContext {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

export const BBRRPClientContext = React.createContext<IBBRRPClientContext>({
  loggedIn: false,
  setLoggedIn: () => null,
});

export const BBRRPClientProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <BBRRPClientContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </BBRRPClientContext.Provider>
  );
};
