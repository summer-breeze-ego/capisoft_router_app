import { useState } from "react"
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { setAuthenticated } = useAuth(); // use context

    // constant/function to check validity of email and password
    // change authentification and update current page
    // when sign up button is pressed
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