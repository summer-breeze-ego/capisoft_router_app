import { Flex, SimpleGrid, Image, Box, Button, Stack } from "@chakra-ui/react";
import purple_facecream from '../../assets/product_img/purple_facecare.png'
import bodylotion from '../../assets/product_img/body_lotion.png'
import dripdrip from '../../assets/product_img/dripdrip.png'
import peachshoe from '../../assets/product_img/peachshoe.png'
import perfume from '../../assets/product_img/perfume.png'
import shaker from '../../assets/product_img/shaker.png'
import sneakers from '../../assets/product_img/sneakers.png'
import techstuff from '../../assets/product_img/tech_stuff.png'

import GridViewReviews from "./GridViewReviews";
import ListViewReviews from "./ListViewReviews";

export const Products = [
    {
        image: purple_facecream,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Removed'
    },
    {
        image: bodylotion,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Removed'
    },
    {
        image: dripdrip,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Reminder Sent'
    },
    {
        image: techstuff,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Removed'
    },
    {
        image: sneakers,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Reminder Sent'
    },
    {
        image: peachshoe,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Reminder Sent'
    },
    {
        image: perfume,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Removed'
    },
    {
        image: shaker,
        title: "Product title goes here",
        link: "https://yourproducturlgoeshere1122.com",
        status: 'Removed'
    }
]

export default function ContentReviews() {

    const gridview = false

    return (
        <>
            <Flex w='100%' mt={'5'}>
                <Box textAlign={"left"} fontWeight={'bold'} paddingTop={'2'}>Product List</Box>

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
            {gridview ?
                <GridViewReviews />
                :
                <ListViewReviews />
            }
        </>
    )




}