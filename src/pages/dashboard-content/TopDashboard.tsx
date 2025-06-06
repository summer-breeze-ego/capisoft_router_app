import { Box, Flex, InputGroup, Input, Text, Button, VStack } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

export default function TopDashboard() {
    
    return (
        <>         
            {/* top row with page title search bad and username & profile pic */}
            <Flex gap={'10'} >
                <Box textAlign='left' fontSize={'3xl'} fontWeight={'extrabold'} mt={'0'} mb={'auto'}>Dashboard</Box>
                <Flex gap ={'10'} ml={'auto'} mr={'5%'}>
                    <InputGroup flex='1' endElement={<LuSearch />} >
                        <Input placeholder="Search" borderColor={'rgba(0, 0, 0, 0)'} bgColor={'white'}/>
                    </InputGroup>
                    <Button bg={'rgba(0, 0, 0, 0)'}>
                        <CgProfile />
                        <VStack gap={'1px'}>
                            <Text>Username</Text>
                            <Text fontSize={'2xs'} color={'gray'} mr={'auto'}>Role</Text>
                        </VStack>
                
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}