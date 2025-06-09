import { Box, Flex, Button, Stack, Separator } from "@chakra-ui/react"

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
                    <Flex gap={2}>
                        <Flex
                            fontSize={'small'}
                            alignItems={'center'}
                        >
                            Mademoiselle 3.4fl.oz 100 ml perfume, CHANEL
                        </Flex>
                        <Flex
                            fontSize={'xs'}
                            alignItems={'center'}
                            color={'gray'}
                        >
                            https://yourproducturlgoeshere1122.com
                        </Flex>
                        <Flex
                            ml={'auto'}
                        >
                            1 min ago
                        </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Flex
                            fontSize={'small'}
                            alignItems={'center'}
                        >
                            Cigarettes Crush balls Aroma, BLUE
                        </Flex>
                        <Flex
                            fontSize={'xs'}
                            alignItems={'center'}
                            color={'gray'}
                        >
                            https://yourproducturlgoeshere1122.com
                        </Flex>
                        <Flex
                            ml={'auto'}
                        >
                            2 min ago
                        </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Flex
                            fontSize={'small'}
                            alignItems={'center'}
                        >
                            Pokémon Enamel Pins Lot you can choose from
                        </Flex>
                        <Flex
                            fontSize={'xs'}
                            alignItems={'center'}
                            color={'gray'}
                        >
                            https://yourproducturlgoeshere1122.com
                        </Flex>
                        <Flex
                            ml={'auto'}
                        >
                            2 min ago
                        </Flex>
                    </Flex>
                    <Flex gap={2}>
                        <Flex
                            fontSize={'small'}
                            alignItems={'center'}
                        >
                            4 PCS Herb Tobacco Spice Grinder, COMBAT
                        </Flex>
                        <Flex
                            fontSize={'xs'}
                            alignItems={'center'}
                            color={'gray'}
                        >
                            https://yourproducturlgoeshere1122.com
                        </Flex>
                        <Flex
                            ml={'auto'}
                        >
                            2 min ago
                        </Flex>
                    </Flex>
                </Stack>
            </Flex>
        </>
    )
}