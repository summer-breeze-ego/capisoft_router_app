import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Dashboard() {
    const { setAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated:", false)
        navigate("../login")
    }

    const handleUsers = () => {
        navigate("../users")
    }

    return (
        <>
            <p>This is the Dashboard page.</p>
            <button onClick={handleSignOut}>Logout</button>
            <button onClick={handleUsers}>Users</button>
        </>
    )
}