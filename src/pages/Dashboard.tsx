import TodoCard from "../components/todos.tsx";
import { Flex } from "@chakra-ui/react";
import SiderbarLeft from "../components/Sidebar";
import ContentDashboard from "./dashboard-components/ContentDashboard.tsx";
import DateDashboard from "./dashboard-components/DateDashboard.tsx";
import Header from "../components/Header.tsx";

export default function Dashboard() {

    return (
        <Flex display="flex" alignItems="flex-start">
            <SiderbarLeft active_page="Dashboard" />

            <Flex flexDirection={'column'}
                gap='10'
                top={'0'} left={'0'}
                h={'100%'} w={'100%'}
                display={'flex'}
                wrap={'wrap'}
            /* ml={'5%'} */
            >
                <Header title_page="Dashboard" />

                <Flex flexDirection={'column'}>

                    <DateDashboard />

                    <ContentDashboard />

                </Flex>

            </Flex>

            {/* <TodoCard /> */}
        </Flex>
    )
}