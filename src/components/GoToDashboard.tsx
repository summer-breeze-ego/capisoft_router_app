import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface PrivateRouteProps {
    children: JSX.Element
}

function GoToDashboard({ children }: PrivateRouteProps) {
    const { authenticated } = useAuth();

    if (authenticated) {
        return <Navigate to="/dashboard" replace />
    }

    return children
}

export default GoToDashboard