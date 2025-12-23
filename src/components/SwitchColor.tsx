import { Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

const SwitchColor = () => {
    const {colorMode,toggleColorMode}=useColorMode();
  return (
    <Switch padding={"18px"} isChecked={colorMode==="dark"} onChange={toggleColorMode} />
  )
}

export default SwitchColor