import { Box, Flex, Image, Button, Stack } from "@chakra-ui/react"

import green_seller from "../../assets/icons/top-sellers-icons/sell-green.png"
import red_seller from "../../assets/icons/top-sellers-icons/sell-red.png"
import blue_seller from "../../assets/icons/top-sellers-icons/sell-blue.png"
import purple_seller from "../../assets/icons/top-sellers-icons/sell-purple.png"
import yellow_seller from "../../assets/icons/top-sellers-icons/sell-yellow.png"

export const FakeSellersData = [
    {
        img_path: green_seller,
        name: "Rose Meadows",
        company_name: "Company Name",
        list_nr: "Listing #2464"
    },
    {
        img_path: red_seller,
        name: "Madden Esparza",
        company_name: "Company Name",
        list_nr: "Listing #6345"
    },
    {
        img_path: blue_seller,
        name: "Edison Norman",
        company_name: "Company Name",
        list_nr: "Listing #9815"
    },
    {
        img_path: purple_seller,
        name: "Terrance Conner",
        company_name: "Company Name",
        list_nr: "Listing #9245"
    },
    {
        img_path: yellow_seller,
        name: "Curtis Valentine",
        company_name: "Company Name",
        list_nr: "Listing #2390"
    }
]

export default function FakeSellers() {
    return (
        <>
            <Flex>
                <Box
                    fontWeight={'bold'}
                >
                    Top 5 Fake Sellers</Box>
                <Button
                    ml={'auto'}
                    bgColor={'white'}
                    fontSize={'small'}
                    padding={0}
                >
                    View All
                </Button>
            </Flex>
            <Flex>
                <Stack width={'100%'} gap={4}>
                    {
                        FakeSellersData.map((seller) =>
                            <Flex gap={2}>
                                <Image src={seller.img_path} width={'30px'} />
                                <Flex flexDirection={'column'} fontSize={10} textAlign={'left'}>
                                    <Box fontWeight={'bold'} fontSize={12}>{seller.name}</Box>
                                    <Box fontWeight={'light'}>{seller.company_name}</Box>
                                </Flex>
                                <Flex
                                    ml='auto'
                                    opacity={'60%'}
                                    alignItems={'center'}
                                    fontSize={12}
                                >
                                    {seller.list_nr}
                                </Flex>
                            </Flex>
                        )
                    }
                </Stack>
            </Flex>
        </>
    )
}