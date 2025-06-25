import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

function GoToPage() {
    const { authenticated } = useAuth();

    const { navigationTarget, navigateTo } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (navigationTarget && authenticated) {
            navigate(navigationTarget);

            navigateTo(null);
        }
    }, [navigationTarget, navigate, navigateTo]);

    return null
}

export default GoToPage