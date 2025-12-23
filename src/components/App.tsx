import { Grid, GridItem, Show } from '@chakra-ui/react'
import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import SideBar from './SideBar'
import useData from './hooks/useData'
import type { Genre } from './hooks/useGenre'
import type { Platform } from './hooks/usePlatform'

const App = () => {
  const [title,setTitle]=useState("Game All");
  const [genre,setGenre]=useState<Genre|null>(null);
  const [platform,setPlatform]=useState<Platform|null>(null);
  const [search,setSearch]=useState("");



  const setSearchInput=(item:string)=>{
    setSearch(item);
  }

  const setSelectGenre=(item:Genre)=>{
    setGenre(item);
  }

  const setSelectPlatform=(item:Platform)=>{
    setPlatform(item);
  }
  return (
    <Grid templateAreas={{
      base:`"header" "sidebar" "main"`,
      lg:`"header header" "sidebar main"`
    }}
    
    templateColumns={{
      base:"100fr",
      lg:"10fr 90fr" 
    }}>

      <GridItem area="header" >
        <Header setSearch={setSearchInput} />
      </GridItem>

      <GridItem area={"sidebar"} >

        <SideBar genre={genre?.name} setGenre={setSelectGenre} setTitle={setTitle} direction="column" />
      </GridItem>
        
      

      
      
      
        

      <GridItem area="main" >
        <Main searching={search} platform={platform} setPlatform={setPlatform} genre={genre} title={title}/>
      </GridItem>

    </Grid>
  )
}

export default App