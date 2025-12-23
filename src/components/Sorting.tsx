import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    ordering:string,
    setOrdering:(item:string)=>void
}

const Sorting = ({ordering,setOrdering}:Props) => {
    const sort=["name", "released", "added", "created", "updated", "rating", "metacritic"]
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{ordering?ordering:"ordering"}</MenuButton>
        <MenuList>
            {sort.map(item=>(
                <MenuItem onClick={()=>{
                    setOrdering(item);
                }}>{item}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}

export default Sorting