import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePage } from "../context/PageContext";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthenticated } = useAuth(); // use context
    const [error, setError] = useState('')
    const { setPage } = usePage()

    const navigate = useNavigate()

    const handleSignUp = () => {
        // validation
        if (email.length < 3) {
            setError("Email must be min. 5 characters.")
            console.log(error)
            return
        }
        if (password.length < 3) {
            setError("Password must be min. 5 characters.")
            console.log(error)
            return
        }

        // clear error to proceed
        setError('')
        setAuthenticated(true); // global value thanks to context
        console.log("Authenticated:", true);
        navigate("../dashboard")

    }

    // const to get the value from the email or password text input box
    const onChange =  (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
    }

    return (
        <>
            <h2>Login Page</h2>
            <input 
            type="email" 
            id="email" 
            name="Email" 
            required 
            placeholder="email@example.com" 
            onChange={onChange(setEmail)} 
            />

            <br/>

            <input 
            type="password" 
            id="password" 
            name="Password" 
            required 
            onChange={onChange(setPassword)} 
            />

            <br/>

            <button onClick={handleSignUp}>Sign Up</button>
        
        </>
    )
}