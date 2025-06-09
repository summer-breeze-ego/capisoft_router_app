import TodoCard from "../components/todos.tsx";
import { Flex } from "@chakra-ui/react";
import SiderbarLeft from "../components/Sidebar";
import TopDashboard from "./dashboard-content/TopDashboard.tsx";
import ContentDashboard from "./dashboard-content/ContentDashboard.tsx";
import DateDashboard from "./dashboard-content/DateDashboard.tsx";

export default function Dashboard() {

    return (
        <Flex display="flex" alignItems="flex-start">
            <SiderbarLeft />

            <Flex flexDirection={'column'}
                gap='10'
                top={'0'} left={'0'}
                h={'100%'} w={'100%'}
                display={'flex'}
                wrap={'wrap'}
            /* ml={'5%'} */
            >
                <TopDashboard />

                <Flex flexDirection={'column'}>

                    <DateDashboard />

                    <ContentDashboard />

                </Flex>

            </Flex>

            {/* <TodoCard /> */}
        </Flex>
    )
}