import { Flex, Button, Text, Image, Stack, Box } from "@chakra-ui/react"
import house from "../assets/icons/house.png"
import apost from "../assets/icons/apost.png"
import user from "../assets/icons/user.png"
import logout from "../assets/icons/logout.png"
import command_square from "../assets/icons/command-square.png"
import setting from "../assets/icons/setting.png"
import noti_bell from "../assets/icons/notification-bing.png"
import hashtag from "../assets/icons/hashtag.png"
import { useAuth } from "../context/AuthContext";

function SiderbarLeft() {
    const { setAuthenticated } = useAuth();

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated:", false)
    }

    return (
        <Box
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
                    <Image src={hashtag} width='15px' marginRight='5px' />
                    Keywords
                </Button>

                <Button
                    backgroundColor='white'
                    color='black'
                    width='100%'
                    justifyContent='flex-start'
                    paddingLeft='10px'
                    marginBottom='0.5rem'
                >
                    <Image src={command_square} width='15px' marginRight='5px' />
                    Web crawler
                </Button>

                <Button
                    backgroundColor='white'
                    color='black'
                    width='100%'
                    justifyContent='flex-start'
                    paddingLeft='10px'
                    marginBottom='0.5rem'
                >
                    <Image src={noti_bell} width='15px' marginRight='5px' />
                    Notifications
                </Button>

                <Button
                    backgroundColor='white'
                    color='black'
                    width='100%'
                    justifyContent='flex-start'
                    paddingLeft='10px'
                    marginBottom='0.5rem'
                >
                    <Image src={setting} width='15px' marginRight='5px' />
                    Settings
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
        </Box>
    )
}


export default SiderbarLeft