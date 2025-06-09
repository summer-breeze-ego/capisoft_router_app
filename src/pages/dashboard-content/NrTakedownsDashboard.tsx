import { Box, Flex } from "@chakra-ui/react"
import { MdOutlineInsertChart } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

export default function NrTakedowns() {
    return (
        <>
            <Flex
                flexDirection={'column'}
                textAlign={'left'}
                gap={6}
            >
                <Flex
                    color={'gray'}
                    ml={0}
                    gap={3}
                >
                    <MdOutlineInsertChart size={20} />
                    Number of takedowns
                </Flex>
                <Flex
                    flexDirection={'column'}
                >
                    <Flex
                    >
                        <Box
                            fontSize={40}
                            fontWeight={'bold'}
                        >
                            593568
                        </Box>
                        <Flex
                            color={'#42AA65'}
                            bgColor={'#EBFDEF'}
                            padding={2}
                            borderRadius={'15px'}
                            m={4}
                            fontSize={12.5}
                            gap={1}
                        >
                            <Box mt={'1'}><FaArrowUp /></Box>
                            <Box fontWeight={'bold'}>20.5%</Box>
                        </Flex>
                    </Flex>
                    <Box
                        color='gray'
                        fontSize={12}
                    >
                        June 2025
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}