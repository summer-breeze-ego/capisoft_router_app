import SiderbarLeft from '../components/Sidebar'
import Header from '../components/Header'
import ContentReviews from './reviews-components/ContentReviews'
import { Flex } from '@chakra-ui/react'

function Reviews() {

    return (
        <Flex gap={3} flexDirection={'column'}>
            <Header title_page='Reviews' />
            <SiderbarLeft active_page='Reviews' />

            {/* actual components */}
            <ContentReviews />
        </Flex>
    )
}

export default Reviews