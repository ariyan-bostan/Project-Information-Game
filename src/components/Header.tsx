import { Flex, Image, Text } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import React from 'react'
import SwitchColor from './SwitchColor'
import Searching from './Searching'

interface Props{
  setSearch:(item:string)=>void
}

const Header = ({setSearch}:Props) => {
  return (
    <Flex direction={"row"} justifyContent={"space-between"}>
        <Image src={logo}  boxSize={"50px"}/>
        <Searching setSearch={setSearch} />
        <SwitchColor />
    </Flex>
  )
}

export default Header