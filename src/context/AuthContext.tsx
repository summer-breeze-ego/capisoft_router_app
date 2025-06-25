import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

// defining AuthContext type AuthContextType as an interface (shape of data)
interface AuthContextType {
    authenticated: boolean; // boolean property
    setAuthenticated: (auth: boolean) => void; // property that is a function that takes auth and returns nothing
    navigationTarget: string | null; // global variable to state where to go
    navigateTo: (path: string | null) => void; // function to set the navigation target
}

// use createContext to create a constant AuthContext of type either AuthContextType or undefined
// which by default is underfined "(undefined)"
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// defines as React component
// children means whatever React elements are inside it
export function AuthProvider({ children }: { children: ReactNode }) {

    // define authenticated variable and function to set its value (by default false) to use globally
    const [authenticated, setAuthenticated] = useState(false);
    //add state for navigation target
    const [navigationTarget, setNavigationTarget] = useState<string | null>(null);

    //updating the targe
    const navigateTo = (path: string | null) => {
        setNavigationTarget(path);
    }

    // what <AuthContext>...</AuthContext> renders
    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated, navigationTarget, navigateTo, }}>
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