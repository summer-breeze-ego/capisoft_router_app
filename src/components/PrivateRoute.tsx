import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

interface PrivateRouteProps {
    children: JSX.Element
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
    const { authenticated } = useAuth();

    return authenticated ? children : <Navigate to="/login" replace />
}