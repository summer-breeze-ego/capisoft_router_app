import { Flex } from "@chakra-ui/react";

import Header from "../components/Header";
import SiderbarLeft from "../components/Sidebar";
import ContentUsers from "./users-components/ContentUsers";

export default function Users() {

    return (
        <Flex gap={3} flexDirection={'column'}>
            <Header title_page="Users" />
            <SiderbarLeft active_page="Users" />

            {/* actual components */}
            <ContentUsers />
        </Flex >
    )
}