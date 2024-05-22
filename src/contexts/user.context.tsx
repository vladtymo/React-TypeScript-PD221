import * as React from 'react';
import { createContext, useContext } from "react"

type AccountContent = {
    email: string,
    isAuth: Boolean,
    login: (email: string) => void,
    logout: () => void
}

export const AccountContext = createContext<AccountContent>({
    email: "",
    isAuth: false,
    login: (email: string) => { },
    logout: () => { }
});

type AccountProviderProps = {
    children: React.ReactNode;
};

export const AccountProvider = ({ children }: AccountProviderProps) => {
    const [email, setEmail] = React.useState<string>("");
    const [isAuth, setAuth] = React.useState<boolean>(false);

    const login = (email: string) => {
        setEmail(email);
        setAuth(true);
    };
    const logout = () => {
        setEmail("");
        setAuth(false);
    };

    return <AccountContext.Provider value={{ email, isAuth, login, logout }}> {children} </AccountContext.Provider>;
};

export default AccountProvider;