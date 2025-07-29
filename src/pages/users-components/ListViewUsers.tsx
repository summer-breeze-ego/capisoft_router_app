import { Box, Stack, Flex, Button, Image } from "@chakra-ui/react"
import { UsersInfo } from "./ContentUsers"

export default function ListViewReviews() {
    return (
        < Box >
            <Stack width={'100%'} gap={2}>
                {
                    UsersInfo.map((infoitem) =>
                        <Flex
                            bgColor={'white'}
                            padding={'3'}
                            borderRadius={'16px'}
                            gap={'3'}
                            alignItems={'center'}
                        >
                            <Flex gap={3}>
                                <Image src={infoitem.profilepic} h='50px' borderRadius={'8px'} />
                                <Flex flexDirection={'column'} textAlign={'left'}>
                                    <Box
                                        fontWeight={'500'}
                                        fontSize={'16px'}
                                    >
                                        {infoitem.username}
                                    </Box>
                                    <Box
                                        fontWeight={'400'}
                                        opacity={'60%'}
                                        fontSize={'12px'}
                                    >
                                        {infoitem.email}
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box
                                color={
                                    infoitem.role === 'Admin' ? '#f2d10a' : (infoitem.role === 'Mod' ? '#A200FF' : '#0073FF')
                                }
                                bgColor={
                                    infoitem.role === 'Admin' ? '#fcf3bd' : (infoitem.role === 'Mod' ? '#e6c3fa' : '#D2E5FC')
                                }
                                p={2}
                                borderRadius={'8px'}
                                fontSize={'10px'}
                                fontWeight={'500'}
                                pt={'1'}
                                pb={'1'}
                            >
                                {infoitem.role}
                            </Box>
                            <Button
                                ml={'auto'}
                                color={'white'}
                                fontSize={'14px'}
                                fontWeight={'500'}
                            >
                                Notify
                            </Button>
                            <Button
                                color={'white'}
                                bgColor={'#6F6CF3'}
                                fontSize={'14px'}
                                fontWeight={'500'}
                            >
                                View Details
                            </Button>
                        </Flex>
                    )
                }
            </Stack>
        </Box>
    )
}