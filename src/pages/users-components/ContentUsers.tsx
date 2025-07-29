import { Flex, Box, Button } from "@chakra-ui/react";
import purple_facecream from '../../assets/product_img/purple_facecare.png'

import bodylotion from '../../assets/product_img/body_lotion.png'
import dripdrip from '../../assets/product_img/dripdrip.png'
import peachshoe from '../../assets/product_img/peachshoe.png'
import perfume from '../../assets/product_img/perfume.png'
import shaker from '../../assets/product_img/shaker.png'
import sneakers from '../../assets/product_img/sneakers.png'
import techstuff from '../../assets/product_img/tech_stuff.png'

import pp from "../../assets/profile-pic.png"

import ListViewUsers from "./ListViewUsers";

export const UsersInfo = [
    {
        profilepic: purple_facecream,
        username: "User 1",
        email: "user1@august.com",
        role: 'Mod'
    },
    {
        profilepic: bodylotion,
        username: "User 2",
        email: "user2@august.com",
        role: 'User'
    },
    {
        profilepic: dripdrip,
        username: "User 3",
        email: "user3@august.com",
        role: 'User'
    },
    {
        profilepic: pp,
        username: "John Smith",
        email: "johnsmith@august.com",
        role: 'Admin'
    },
    {
        profilepic: sneakers,
        username: "User 4",
        email: "user4@august.com",
        role: 'User'
    },
    {
        profilepic: peachshoe,
        username: "User 5",
        email: "user5@august.com",
        role: 'Mod'
    },
    {
        profilepic: perfume,
        username: "User 6",
        email: "user6@august.com",
        role: 'User'
    },
    {
        profilepic: shaker,
        username: "User 7",
        email: "user7@august.com",
        role: 'User'
    }
]

export default function ContentUsers() {

    const gridview = false

    return (
        <>
            <Flex w='100%' mt={'5'}>
                <Box textAlign={"left"} fontWeight={'bold'} paddingTop={'2'}>User Information</Box>

                {/* container for filter buttons on the right of date */}
                <Flex ml={'auto'} gap={'3'}>
                    <Button
                        bgColor={gridview ? 'black' : 'white'}
                        color={gridview ? 'white' : 'black'}
                    >
                        Grid View
                    </Button>
                    <Button
                        bgColor={gridview ? 'white' : 'black'}
                        color={gridview ? 'black' : 'white'}>
                        List View
                    </Button>
                </Flex>
            </Flex>

            {/* if gridview is true then its show as grid if not as list */}
            <ListViewUsers />
        </>
    )




}