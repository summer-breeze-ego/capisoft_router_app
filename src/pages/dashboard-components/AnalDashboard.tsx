import { Box, Flex } from "@chakra-ui/react"
import AnalyticsBarChart from "./AnalyticsDashboard";

export default function Analytics() {
    return (
        <>
            <Flex
                flexDirection={'column'}
                textAlign={'left'}
                h="100%"
                gap={2}
            >
                <Flex gap={2}>
                    <Box
                        color={'black'}
                        fontWeight={'bold'}
                    >
                        Analytics
                    </Box>
                    <Flex
                        fontSize={12}
                        ml={'auto'}
                        gap={2}
                        fontWeight={'bold'}
                    >
                        <Flex gap={1}>
                            <Box mt={1} width={'10px'} height={'10px'} bgColor={'#D7F0FC'} borderRadius={'50%'}></Box>
                            Listings Removed
                        </Flex>
                        <Flex gap={1}>
                            <Box mt={1} width={'10px'} height={'10px'} bgColor={'#CDEFD9'} borderRadius={'50%'}></Box>
                            Notices Sent
                        </Flex>
                        <Flex gap={1} >
                            <Box mt={1} width={'10px'} height={'10px'} bgColor={'#FEA4A3'} borderRadius={'50%'}></Box>
                            Notices Rejected
                        </Flex>
                    </Flex>
                </Flex>
                <Box
                    flex={"1"}
                    fontSize={'2xs'}
                >
                    <AnalyticsBarChart />
                </Box>
            </Flex>
        </>
    )
}