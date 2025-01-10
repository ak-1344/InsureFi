import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define the shape of the user object
interface IUser {
    email: string;
    password: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
}

// Define the shape of the context value
interface IUserContext {
    user: IUser | null;
    setUser: Dispatch<SetStateAction<IUser | null>>;
}

// Create the context with a default value of null
export const UserContext = createContext<IUserContext | null>(null);

// Define the props for the provider component
interface UserContextProviderProps {
    children: ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;