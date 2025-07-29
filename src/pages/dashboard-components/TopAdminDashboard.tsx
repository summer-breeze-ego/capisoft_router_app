import { Box, Flex, Image, Button, Text } from "@chakra-ui/react"
import top_admin_pic from "../../assets/top-admin-pic.png"

export default function TopAdmin() {
    return (
        <>
            <Flex flexDirection={'column'}>
                <Flex>
                    <Box
                        fontWeight={'bold'}
                    >
                        Top Admin</Box>
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
                    <Flex width={'100%'}>
                        <Flex flexDirection={'column'}>
                            <Image src={top_admin_pic} />
                            <Flex flexDirection={'column'}>
                                <Box>
                                    Carl Meadows
                                </Box>
                                <Box fontSize={'small'} color={'gray'}>
                                    Admin
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                            gap={2}
                            ml={'auto'}
                            justifyContent={'center'}
                        >
                            <Button
                                gap={2}
                                bgColor={'#F4F6F7'}
                                borderRadius={7}
                                padding={3}
                            >
                                <Text color={'gray'} fontSize={'small'} hideBelow={'md'}>
                                    Notices Reviewed:
                                </Text>
                                <Text fontWeight={'bold'}>
                                    23,353
                                </Text>
                            </Button>
                            <Button
                                bgColor={'#6F6CF3'}
                                color={'white'}
                            >
                                View Details
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}