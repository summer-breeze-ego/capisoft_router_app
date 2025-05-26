import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

// defining AuthContext type AuthContextType as an interface (shape of data)
interface AuthContextType {
    authenticated: boolean; // boolean property
    setAuthenticated: (auth: boolean) => void; // property that is a function that takes auth and returns nothing
}

// use createContext to create a constant AuthContext of type either AuthContextType or undefined
// which by default is underfined "(undefined)"
const AuthContext = createContext<AuthContextType | undefined> (undefined);

// defines as React component
// children means whatever React elements are inside it
export function AuthProvider({ children } : { children: ReactNode }) {
    
    // define authenticated variable and function to set its value (by default false) to use globally
    const [authenticated, setAuthenticated] = useState(false);

    // what <AuthContext>...</AuthContext> renders
    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated}}>
            {children} {/* any React element inside */}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    // context calls for closest "AuthContext.Provider" and retrieves authenticated value and stores it in context
    const context = useContext(AuthContext);

    // if no value was found for context then it throws an error
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}