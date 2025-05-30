import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { setAuthenticated } = useAuth();

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated:", false)
    }

    return (
        <>
            <p>This is the Dashboard page.</p>
            <button onClick={handleSignOut}>Logout</button>
        </>
    )
}