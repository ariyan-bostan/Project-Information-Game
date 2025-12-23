import { Button, Flex, Grid, Heading, HStack, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import useData from './hooks/useData'
import useGenre, { type Genre } from './hooks/useGenre'
import { base } from 'framer-motion/client'

interface Props{
    direction:string,
    setTitle:(title:string)=>void,
    setGenre:(genre:Genre)=>void,
    genre?:string
}

const SideBar = ({direction,setTitle,setGenre,genre}:Props) => {
    const {data,error,loading}=useGenre();
  return (
    <>
    <Heading fontSize={"2xl"}>Genres</Heading>
    <SimpleGrid padding={"5px"} columns={{
        sm:3,
        md:5,
        lg:1
    }} >
        {data.map(item=>(
            <HStack margin={"4px"}>
                <Image objectFit={"cover"} boxSize={"30px"} borderRadius={"20%"} src={item.image_background} />
                <Button onClick={()=>{
                    setTitle(item.name);
                    setGenre(item);
                    console.log(genre===item.name)
                    
                }} variant={"link"} whiteSpace={"normal"} fontWeight={genre===item.name?"bold":"normal"}  >{item.name}</Button>
            </HStack>
        ))}
    </SimpleGrid>
    </>
  )
}

export default SideBar