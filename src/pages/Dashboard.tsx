import { useAuth } from "../context/AuthContext";
import TodoCard from "../components/todos";
import { Text, Button } from "@chakra-ui/react";

export default function Dashboard() {
    const { setAuthenticated } = useAuth();

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated:", false)
    }

    return (
        <>
            <Text 
                fontSize='6xl'
                fontWeight='extrabold'
            >
                Dashboard
            </Text>
            <TodoCard />
            <Button margin={2} borderColor={"black"} color={"white"} onClick={handleSignOut}>Logout</Button>
        </>
    )
}