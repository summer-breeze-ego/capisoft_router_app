import { Box, SimpleGrid, GridItem } from "@chakra-ui/react"

{/* import components of dashboard content */ }
import NrTakedowns from "./NrTakedownsDashboard";
import PGScraped from "./PGSDashboard";
import NewNotis from "./NewNotiDashboard"
import Analytics from "./AnalDashboard"
import FakeSellers from "./FakeSellDashboard";
import NotiTakeDowns from "./NotiTakeDownsDashboard";
import TopAdmin from "./TopAdminDashboard";

export default function ContentDashboard() {
    return (
        <>
            <Box w='100%' mt={'10px'}>
                <SimpleGrid minChildWidth='300px' gap='5'>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'20px'} >
                        <NrTakedowns />
                    </GridItem>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'20px'} >
                        <PGScraped />
                    </GridItem>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'20px'} >
                        <NewNotis />
                    </GridItem>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'20px'} colSpan={2} h={'300px'} >
                        <Analytics />
                    </GridItem>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'20px'}>
                        <FakeSellers />
                    </GridItem>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'10px'} colSpan={2}>
                        <NotiTakeDowns />
                    </GridItem>
                    <GridItem padding='20px' backgroundColor='white' borderRadius={'10px'} >
                        <TopAdmin />
                    </GridItem>
                </SimpleGrid>


            </Box>
        </>
    )
}