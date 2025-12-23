import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import type { Game } from './hooks/useGame'
import usePlatform, { type Platform } from './hooks/usePlatform';

interface Props{
    platform:Platform|null,
    setPlatform:(item:Platform)=>void
}
const Platforms = ({platform,setPlatform}:Props) => {
    const {data}=usePlatform();
  return (
    <Menu >
        <MenuButton marginLeft={"10px"} rightIcon={<BsChevronDown/>} as={Button}>{platform?platform.name:"platforms"}</MenuButton>
        <MenuList>
            {data.slice(0,10).map(item=>(
                <MenuItem onClick={()=>{
                    setPlatform(item)
                }} key={item.id}>{item.name}</MenuItem>
            ))}
        </MenuList>
    </Menu>
 )
}

export default Platforms