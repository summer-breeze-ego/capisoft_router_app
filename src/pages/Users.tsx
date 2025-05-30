import { useAuth } from "../context/AuthContext"

export default function Users() {
    const {setAuthenticated} = useAuth()

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated", false)
    }

    return (
        <>
            <p>This is the Users page.</p>
            <button onClick={handleSignOut}>Logout</button>
        </>
    )
}