import { Box, SimpleGrid, Flex, Button } from "@chakra-ui/react"
import { Products } from "./ContentReviews"

export default function GridViewReviews() {
    return (
        <Box width={'100%'} mt={'3'}>
            <SimpleGrid minChildWidth={'250px'} gap={'6'} >
                {
                    Products.map((product) =>
                        <Flex
                            flexDirection={'column'}
                            bgColor={'white'}
                            padding={'4'}
                            borderRadius={'24px'}
                            gap='5'
                            justifyContent={'flex-start'}
                        >
                            <Box
                                bgImage={`url(${product.image})`}
                                h={'240px'}
                                w={'100%'}
                                position={'relative'}
                                bgSize={'cover'}
                                backgroundPosition={'center'}
                                bgRepeat={'no-repeat'}
                                borderRadius={'16px'}
                            >
                                <Box
                                    bgColor={'#85858533'}
                                    position={'absolute'}
                                    top={'3'}
                                    left={'3'}
                                    borderRadius={'8px'}
                                    color={'white'}
                                    fontWeight={'500'}
                                    fontSize={'14px'}
                                    py={'2px'}
                                    px={'8px'}
                                >
                                    Status
                                </Box>
                            </Box>

                            <Flex flexDirection={'column'} textAlign={'left'} gap={1}>
                                <Box
                                    color={'black'}
                                >
                                    {product.title}
                                </Box>
                                <Box
                                    fontSize={'2xs'}
                                    opacity={'60%'}
                                >
                                    {product.link}
                                </Box>
                            </Flex>
                            <Flex>
                                <Button
                                    bgColor={'#6F6CF3'}
                                    color={'white'}
                                    fontSize={'medium'}
                                >
                                    View Details
                                </Button>
                                <Button
                                    color={'white'}
                                    ml={'auto'}
                                    mt={'auto'}
                                    size={'2xs'}
                                    p='3'
                                    fontSize={'xs'}
                                >
                                    Source
                                </Button>
                            </Flex>
                        </Flex>

                    )
                }
            </SimpleGrid>
        </Box>
    )
}