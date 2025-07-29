import { Box, Flex, Button, Stack, Separator } from "@chakra-ui/react"

const ProductNoti = [
    {
        title: "Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL",
        link: "https://yourproducturlgoeshere1122.com",
        timeago: "1 min ago",
    },
    {
        title: "Cigarettes Crush balls Aroma, BLUE",
        link: "https://yourproducturlgoeshere1122.com",
        timeago: "2 min ago",
    },
    {
        title: "Pokémon Enamel Pins Lot you can choose from",
        link: "https://yourproducturlgoeshere1122.com",
        timeago: "2 min ago",
    },
    {
        title: "4 PCS Herb Tobacco Spice Grinder, COMBAT",
        link: "https://yourproducturlgoeshere1122.com",
        timeago: "2 min ago",
    }
]


export default function NotiTakeDowns() {
    return (
        <>
            <Flex
                flexDirection={'column'}
            >
                <Flex
                    width={'100%'}
                    pt={0}
                >
                    <Box fontWeight={'bold'}> Notifications of Take Downs</Box>
                    <Button
                        ml={'auto'}
                        padding={0}
                        bgColor={'white'}
                        fontSize={'small'}
                    >
                        View All
                    </Button>
                </Flex>
                <Stack gap={3} separator={<Separator variant={'dotted'} colorPalette={'#F2F2F2'} />}>
                    {
                        ProductNoti.map((noti) =>
                            <Flex gap={2}>
                                <Flex
                                    gap={2}
                                    direction={{ base: 'column', md: 'row' }}
                                >
                                    <Flex
                                        fontSize={'small'}
                                        alignItems={'center'}
                                    >
                                        {noti.title}
                                    </Flex>
                                    <Flex
                                        fontSize={'xs'}
                                        alignItems={'center'}
                                        color={'gray'}
                                    >
                                        {noti.link}
                                    </Flex>
                                </Flex>
                                <Flex
                                    ml={'auto'}
                                >
                                    {noti.timeago}
                                </Flex>
                            </Flex>
                        )
                    }


                </Stack >
            </Flex >
        </>
    )
}