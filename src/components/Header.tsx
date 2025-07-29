import { Flex, InputGroup, Input, Text, Button, VStack, Image } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import pp from "../assets/profile-pic.png"

type HeaderProps = {
    title_page: string;
}

export default function Header({ title_page }: HeaderProps) {
    return (
        < Flex
            gap={'10'}
            direction={{ base: 'column', sm: 'row' }}
        >
            <Flex textAlign='left' fontSize={'3xl'} fontWeight={'extrabold'} mt={'0'} mb={'auto'}>{title_page}</Flex>
            <Flex gap={'6'} ml={{ sm: 'auto' }} mr={'0'}
                direction={{ base: 'column', sm: 'row' }}
            >
                <InputGroup
                    flex='1'
                    endElement={<LuSearch size={20} />}
                    minWidth={{ base: '50px', sm: '50px', md: '300px' }}
                >
                    <Input placeholder="Search" borderColor={'rgba(0, 0, 0, 0)'} bgColor={'white'} />
                </InputGroup>
                <Button bg={'rgba(0, 0, 0, 0)'}>
                    <Image src={pp} width={'35px'} />
                    <VStack
                        gap={'1px'}
                        hideBelow={'lg'}
                    >
                        <Text>John Smith</Text>
                        <Text fontSize={'2xs'} color={'gray'} mr={'auto'}>Admin</Text>
                    </VStack>

                </Button>
            </Flex>
        </Flex >
    )
}