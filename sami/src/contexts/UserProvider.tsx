import { createContext, useState } from 'react';
import { User } from '../models/user.model';

export interface UserContextProps {
    currentUser: User | undefined;
}

export const UserContext = createContext<UserContextProps>({
    currentUser: undefined,
});

export interface UserProviderProps {
    children?: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [currentUser] = useState<User | undefined>(
        
    );

    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
};
