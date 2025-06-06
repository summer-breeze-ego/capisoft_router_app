import {Text, Button} from '@chakra-ui/react'
import products from '../data/Products'
import SiderbarLeft from '../components/Sidebar'

function Reviews() {

    return (
        <>
            
            <Text
                fontSize='3xl'
                fontWeight='extrabold'
            >
                Reviews
            </Text>
            <Text
                fontSize='small'
                fontWeight='bold'
            >
                Grid View
            </Text>
            <Button
                margin={2}
                backgroundColor={'white'}
                color={'black'}
            >
                List View
            </Button>
            <Button
                margin={2}
                backgroundColor={'black'}
                color={'white'}
            >
                Grid View
            </Button>
        </>
    )
}

export default Reviews