import { useState } from "react"
import { useAuth } from "../context/AuthContext";
import { Text, Input, Button, Flex } from "@chakra-ui/react";

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
        if (email.length < -1) {
            setError("Email must be min. 5 characters.")
            console.log(error)
            return
        }
        if (password.length < -1) {
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
    const onChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>): void => {
        setter(e.target.value);
    }

    return (
        <Flex flexDirection={'column'} align={'center'}>
            <Text
                fontSize='6xl'
                fontWeight='extrabold'
            >
                Login Page
            </Text>

            <Flex flexDirection={'column'} gap={0}>
                <Input
                    // styling
                    mt={2}
                    backgroundColor={'white'}
                    padding={5}
                    maxWidth={'350px'}
                    borderColor={'white'}

                    // input details
                    type="email"
                    id="email"
                    name="Email"
                    required
                    placeholder="Enter your email"
                    onChange={onChange(setEmail)}
                />

                <br />

                <Input
                    // chakra styling
                    backgroundColor={'white'}
                    padding={5}
                    maxWidth={'350px'}
                    borderColor={'white'}
                    placeholder="Password"

                    // input details
                    type="password"
                    id="password"
                    name="Password"
                    required
                    onChange={onChange(setPassword)}
                />

                <br />

                <Button
                    borderColor={"black"}
                    color={"white"}
                    ml={'10'}
                    mr={'10'}
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
            </Flex>
        </Flex>
    )
}