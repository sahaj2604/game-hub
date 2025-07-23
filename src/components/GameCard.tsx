import React from 'react'
import type { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface prop{
    game:Game
}
const GameCard = ({game}:prop) => {
  return (
    <Card overflow={'hidden'} borderRadius={10}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
