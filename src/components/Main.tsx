import { Box, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import useGame from './hooks/useGame';
import CardGame from './CardGame';
import CardLoading from './CardLoading';
import { title } from 'framer-motion/client';
import Platforms from './Platforms';
import type { Genre } from './hooks/useGenre';
import type { Platform } from './hooks/usePlatform'
import Sorting from './Sorting';
import { useState } from 'react';
import Searching from './Searching';

interface Props{
  title:string,
  genre:Genre|null,
  platform:Platform|null,
  searching:string
  setPlatform:(item:Platform)=>void
}
const Main = ({title,genre,platform,searching,setPlatform}:Props) => {
  const [ordering,setOrdering]=useState("");

  let {data,error,loading}=useGame(genre,platform,ordering,searching);
  let arrayLoading=[1,2,3,4,5,6,7];


  const selectOrder=(item:string)=>{
    setOrdering(item);
  }

  if(error)
    return null;
  
  return (
    <Box padding={"30px"}>
    <Heading marginLeft={"10px"} marginBottom={"10px"}>{title}</Heading>
    <HStack>
      <Platforms platform={platform} setPlatform={setPlatform} />
      <Sorting ordering={ordering} setOrdering={selectOrder} />
    </HStack>
    <SimpleGrid spacing={5}  columns={{
      sm:1,
      md:2,
      lg:3,
      xl:4
    }} >
      {loading && arrayLoading.map(item=>(
        <CardLoading />
      ))}
      {data.map(game=>(
          

          <CardGame game={game} />
      ))}
    </SimpleGrid >
    </Box>
  )
}

export default Main