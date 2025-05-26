import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Users() {
    const {setAuthenticated} = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated", false)
        navigate("../login")
    }

    const handleDashboard = () => {
        navigate("../Dashboard")
    }


    return (
        <>
            <p>This is the Users page.</p>
            <button onClick={handleSignOut}>Logout</button>
            <button onClick={handleDashboard}>Dashboard</button>
        </>
    )
}