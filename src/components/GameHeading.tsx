import { Heading } from '@chakra-ui/react'
import type { GameQuery } from '../App'

interface prop{
    gameQuery:GameQuery
}
const GameHeading = ({gameQuery}:prop) => {
    const platform=gameQuery.platform?.name
    const genre=gameQuery.genre?.name
    const heading= `${platform || ''} ${genre || ''} Games` 
  return (
    <Heading as={'h1'} fontSize={50} marginY={5}>
      {heading}
    </Heading>
  )
}

export default GameHeading
