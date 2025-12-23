import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


interface Props{
  setSearch:(item:string)=>void
}
const Searching = ({setSearch}:Props) => {

  const search1=useRef<HTMLInputElement>(null);



  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if(search1.current){
        setSearch(search1.current.value);
        console.log(search1.current.value);
        search1.current.value="";
      }
    }} style={{width:"100%"}}>

    <InputGroup>
    <InputLeftElement paddingTop={"10px"} children={<BsSearch />}  />
     <Input ref={search1} marginTop={"5px"} borderRadius={"20px"}  type='text' placeholder='Searching...' />
    </InputGroup>
    </form>
  )
}

export default Searching