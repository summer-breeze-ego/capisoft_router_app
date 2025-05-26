import { Navigate } from "react-router-dom";
import { usePage } from "../context/PageContext";
import type { JSX } from "react";

interface ChangePageProps {
    children: JSX.Element
}

// based on value of page we navigate to new or current page
export default function ChangePage({children}: ChangePageProps) {
    const { page } = usePage();

    return page ? children : <Navigate to={"/"+page} replace/>
}