import { createContext, useState, useContext } from "react";
import type {ReactNode} from 'react';
// import { useNavigate } from "react-router-dom";

// defining page type to store name of current page globally
interface PageType {
    page: string;
    setPage: (p: string) => void;
}

// initializing context of type PageType or undefined default -> undefined
const PageContext = createContext<PageType | undefined> (undefined)

// function to make pagecontext and pagetype constant global
export function PageProvider({ children } : { children: ReactNode }) {

    // init page constant
    const [page, setPage] = useState("login");

    // rendering 
    return (
        <PageContext.Provider value={{ page, setPage}}>
            {children}
        </PageContext.Provider>
    )
}

export function usePage() {
    // get closest wrapper value
    const context = useContext(PageContext)

    // check if valid and return
    if (!context) throw new Error("usePage must be used within PageProvider");
    return context;
}