import React from 'react'
import type { Game } from './hooks/useGame'
import { Badge, Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import { h2 } from 'framer-motion/client'
import cropping from './hooks/CropingImage'
import Platfrom from './Platfrom'

interface Props{
    game:Game
}

const CardGame = ({game}:Props) => {
  return (
    <Card  borderRadius={"20px"} overflow={"hidden"} margin={"10px"}>
        <Image objectFit={"cover"} src={cropping(game.background_image)} />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack justify={"space-between"}>
              <Platfrom platforms={game.platforms.map(item=>{
                  return item.platform;
              })} />
              <Badge onClick={()=>{
                console.log(game.metacritic);
              }} borderRadius={"10px"} padding={"10px"} colorScheme={game.metacritic>=90?"green":game.metacritic>=80?'yellow':"gray"}>{game.metacritic?game.metacritic:"-"}</Badge>
            </HStack>
        </CardBody>

    </Card>
  )
}

export default CardGame