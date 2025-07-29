import { Box, Flex } from "@chakra-ui/react"
import { NoticeAreaChart } from "./AnalyticsDashboard";
import { LuMessageSquareDot } from "react-icons/lu";


export default function NewNotis() {
    return (
        <>
            <Flex>
                <Flex>
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
                            <LuMessageSquareDot size={20} />
                            New Notices
                        </Flex>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Flex>
                                <Box
                                    fontSize={40}
                                    fontWeight={'bold'}

                                >
                                    2395
                                </Box>
                            </Flex>
                            <Box
                                color='gray'
                                fontSize={12}
                            >
                                June 2025
                            </Box>

                        </Flex>

                    </Flex>

                </Flex>
                <Flex
                    padding={'1'}
                    textAlign={'right'}
                    width={'60%'}
                >
                    <NoticeAreaChart />
                </Flex>
            </Flex>
        </>
    )
}