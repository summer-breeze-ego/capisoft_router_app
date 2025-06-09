import { Box, Flex, InputGroup, Input, Text, Button, VStack, Image } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import pp from "../../assets/profile-pic.png"

export default function TopDashboard() {

    return (
        <>
            {/* top row with page title search bad and username & profile pic */}
            <Flex gap={'10'} >
                <Flex textAlign='left' fontSize={'3xl'} fontWeight={'extrabold'} mt={'0'} mb={'auto'}>Dashboard</Flex>
                <Flex gap={'6'} ml={'auto'} mr={'0'}>
                    <InputGroup flex='1' endElement={<LuSearch size={20} />} minWidth={'450px'}>
                        <Input placeholder="Search" borderColor={'rgba(0, 0, 0, 0)'} bgColor={'white'} />
                    </InputGroup>
                    <Button bg={'rgba(0, 0, 0, 0)'}>
                        <Image src={pp} width={'35px'} />
                        <VStack gap={'1px'}>
                            <Text>John Smith</Text>
                            <Text fontSize={'2xs'} color={'gray'} mr={'auto'}>Role</Text>
                        </VStack>

                    </Button>
                </Flex>
            </Flex >
        </>
    )
}