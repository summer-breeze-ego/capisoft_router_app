import { Box, SimpleGrid, Flex } from "@chakra-ui/react"

export default function ContentDashboard () {
    return (
        <>
            <Box w='100%' mt={'10px'}>
                    <SimpleGrid minChildWidth='200px' gap='10px'>
                        <Box 
                        padding='20px'
                        backgroundColor='white'
                        borderRadius={'10px'}
                        >
                            This is box 1
                        </Box>
                        <Box 
                        padding='20px'
                        backgroundColor='white'
                        borderRadius={'10px'}
                        >
                            This is box 2
                        </Box>
                        <Box 
                        padding='20px'
                        backgroundColor='white'
                        borderRadius={'10px'}
                        >
                            This is box 3
                        </Box>
                        <Box 
                        padding='20px'
                        backgroundColor='white'
                        borderRadius={'10px'}
                        >
                            This is box 4
                        </Box>
                        <Box 
                        padding='20px'
                        backgroundColor='white'
                        borderRadius={'10px'}
                        >
                            This is box 5
                        </Box>
                        <Box 
                        padding='20px'
                        backgroundColor='white'
                        borderRadius={'10px'}
                        >
                            This is box 6
                        </Box>
                    </SimpleGrid>
               
                </Box>
        </>
    )
}