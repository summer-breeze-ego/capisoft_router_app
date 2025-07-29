import { Button, Text, Stack, Box, Flex, useBreakpointValue } from "@chakra-ui/react"
import { FaHouse } from "react-icons/fa6";
import { MdOutlinePreview } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { LuCommand } from "react-icons/lu";
import { RiSettingsLine } from "react-icons/ri";
import { GoBellFill } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

type SiderbarLeftProps = {
    active_page: string;
};

const SidebarButton = [
    {
        name: 'Dashboard',
        icon: <FaHouse />,
        path: './dashboard',
    },
    {
        name: 'Reviews',
        icon: <MdOutlinePreview />,
        path: '/reviews'
    },
    {
        name: 'Keywords',
        icon: <FaHashtag />,
        path: null
    },
    {
        name: 'Web Crawler',
        icon: <LuCommand />,
        path: null
    },
    {
        name: 'Notifications',
        icon: <GoBellFill />,
        path: null
    },
    {
        name: 'Settings',
        icon: <RiSettingsLine />,
        path: null
    },
    {
        name: 'Users',
        icon: <RiUserFill />,
        path: '/users'
    }
]

function SiderbarLeft({ active_page }: SiderbarLeftProps) {
    // for log out button
    const { setAuthenticated, navigateTo } = useAuth();

    const handleSignOut = () => {
        setAuthenticated(false);
        console.log("Authenticated:", false)
    }

    // function to change page
    const handlePageChange = (path: string | null) => {
        if (path !== null) {
            navigateTo(path)
        }
        console.log("navigate to ", path)
    }

    // change logo from full word to letter when screen is too small
    const Logo = useBreakpointValue({
        base: "A",
        lg: "AUGUST",
    })

    return (
        <Box
            position='fixed'
            left='0'
            top='0'
            height='100%'
            backgroundColor='white'
            zIndex={'999'}
            width={{ base: "4rem", lg: '12rem' }}
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
                    {Logo}
                </Text>

                {
                    SidebarButton.map((button) =>
                        <Button
                            backgroundColor={
                                button.name === active_page ? '#6F6CF3' : "white"
                            }
                            color={
                                button.name !== active_page ? "black" : "white"
                            }
                            width='100%'
                            justifyContent='flex-start'
                            paddingLeft='10px'
                            marginBottom='0.5rem'
                            onClick={() => handlePageChange(button.path)}
                        >
                            <Flex>
                                {button.icon}
                            </Flex>
                            <Flex hideBelow='lg'>
                                {button.name}
                            </Flex>
                        </Button>
                    )
                }

                <Button
                    //styling
                    marginBottom='0'
                    width='100%'
                    backgroundColor='white'
                    justifyContent='flex-start'

                    mt="auto"
                    onClick={handleSignOut}
                >
                    <IoLogOut style={{ transform: "rotate(180deg)" }} />
                    <Flex hideBelow='lg'>
                        Logout
                    </Flex>
                </Button>

            </Stack>
        </Box >
    )
}


export default SiderbarLeft