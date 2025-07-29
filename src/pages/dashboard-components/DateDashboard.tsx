import { Box, Flex, Button } from "@chakra-ui/react";

export default function DateDashboard() {

    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    } as const;

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date())

    return (
        <Flex w='100%' padding={1} margin={3} gap={{ base: '2' }}
            direction={{ base: 'column', sm: 'row' }}
        >
            <Box textAlign={"left"} fontWeight={'bold'} paddingTop={'2'}>
                {formattedDate}
            </Box>

            {/* container for filter buttons on the right of date */}
            <Flex ml={{ base: '0', sm: 'auto' }} gap={'3'}
                direction={{ base: 'column', sm: 'row' }}
            >
                <Box textAlign={'center'} padding={2} color='gray' fontSize={'small'}
                    hideBelow={'md'}
                >
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