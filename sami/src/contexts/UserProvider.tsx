import { createContext, useState } from "react";
import { User } from "../models/user.model";

export interface UserContextProps {
  currentUser: User | undefined;
  setCurrentUser: (user: User) => void;
}

export const UserContext = createContext<UserContextProps>({
  currentUser: undefined,
  setCurrentUser: () => {},
});

export interface UserProviderProps {
  children?: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  return (
    <UserContext.Provider
      value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
