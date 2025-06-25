import { Box, Flex, Button } from "@chakra-ui/react";

export default function DateDashboard() {

    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    } as const;

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date())

    return (
        <Flex w='100%' padding={1} margin={3}>
            <Box textAlign={"left"} fontWeight={'bold'} paddingTop={'2'}>{formattedDate}</Box>

            {/* container for filter buttons on the right of date */}
            <Flex ml={'auto'} gap={'3'}>
                <Box textAlign={'center'} padding={2} color='gray' fontSize={'small'}>
                    Choose Platform:
                </Box>
                <Button bgColor={'white'}>
                    Alibaba
                </Button>
                <Button bgColor={'white'}>
                    Aliexpress
                </Button>
                <Button bgColor={'#6F6CF3'} color={'white'}>
                    All
                </Button>
            </Flex>
        </Flex>
    )
}