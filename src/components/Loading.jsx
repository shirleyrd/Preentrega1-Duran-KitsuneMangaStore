import React from 'react'
import { Spinner, Flex} from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" color="pink">
      <Spinner size='xl' boxSize="150px" thickness='5px'/>
    </Flex>
  )
}

export default Loading
