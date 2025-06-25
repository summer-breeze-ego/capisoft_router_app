import { Box, Stack, Flex, Button, Image } from "@chakra-ui/react"
import { Products } from "./ContentReviews"

export default function ListViewReviews() {
    return (
        < Box >
            <Stack width={'100%'} gap={2}>
                {
                    Products.map((product) =>
                        <Flex
                            bgColor={'white'}
                            padding={'3'}
                            borderRadius={'16px'}
                            gap={'3'}
                            alignItems={'center'}
                        >
                            <Flex gap={3}>
                                <Image src={product.image} h='50px' borderRadius={'8px'} />
                                <Flex flexDirection={'column'} textAlign={'left'}>
                                    <Box
                                        fontWeight={'500'}
                                        fontSize={'16px'}
                                    >
                                        {product.title}
                                    </Box>
                                    <Box
                                        fontWeight={'400'}
                                        opacity={'60%'}
                                        fontSize={'12px'}
                                    >
                                        {product.link}
                                    </Box>
                                </Flex>
                            </Flex>
                            <Box
                                color={
                                    product.status === 'Removed' ? '#42AA65' : '#FF9600'
                                }
                                bgColor={
                                    product.status === 'Removed' ? '#EBFDEF' : '#FFEFE7'
                                }
                                p={2}
                                borderRadius={'8px'}
                                fontSize={'10px'}
                                fontWeight={'500'}
                                pt={'1'}
                                pb={'1'}
                            >
                                {product.status}
                            </Box>
                            <Button
                                ml={'auto'}
                                color={'white'}
                                fontSize={'14px'}
                                fontWeight={'500'}
                            >
                                Source
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