import { Flex, Box, Button, Text, Image, Stack } from "@chakra-ui/react"
import house from "../assets/icons/house.png"
import apost from "../assets/icons/apost.png"
import user from "../assets/icons/user.png"
import logout from "../assets/icons/logout.png"
import { useAuth } from "../context/AuthContext";

function SiderbarLeft() {
    const { setAuthenticated } = useAuth();

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated:", false)
    }

    return (
        <Flex
        position='fixed'
        left='0'
        top='0'
        height='100%'
        backgroundColor='white'
        >
            <Stack
            height='100%'
            padding='1rem'
            display='flex'
            flexDirection='column'
            >
                <Text 
                color='black'
                fontSize='2xl'
                fontWeight='extrabold'
                marginBottom='1rem'
                > 
                    AUGUST
                </Text>
                
                <Button
                backgroundColor='#6F6CF3'
                color='white'
                width='100%'
                justifyContent='flex-start'
                paddingLeft='10px'
                marginBottom='0.5rem'

                >
                    <Image src={house} width='15px' marginRight='5px'
                    />
                    Dashboard
                </Button>

                <Button 
                backgroundColor='white'
                color='black'
                width='100%'
                justifyContent='flex-start'
                paddingLeft='10px'
                marginBottom='0.5rem'

                >
                    <Image src={apost} width='15px' marginRight='5px' />
                    Reviews
                </Button>

                <Button
                backgroundColor='white'
                color='black'
                width='100%'
                justifyContent='flex-start'
                paddingLeft='10px'
                marginBottom='0.5rem'
                >
                    <Image src={user} width='15px' marginRight='5px' />
                    Users
                </Button>

                <Button 
                //styling
                marginBottom='0'
                width='100%'
                backgroundColor='white'
                justifyContent='flex-start'

                mt="auto" 
                onClick={handleSignOut}
                >
                    <Image src={logout} width='15px' marginRight='5px' />
                    Logout
                </Button>

            </Stack>
        </Flex>
    )
}


export default SiderbarLeft