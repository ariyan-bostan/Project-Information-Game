import { Flex, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { FaWindows } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { SiPlaystation3 } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import { SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { SiPlaystation5 } from "react-icons/si";
import type { Platform } from './hooks/usePlatform';
interface Props{
    platforms:Platform[];
}

const Platfrom = ({platforms}:Props) => {

    const icon:{[key:string]:IconType}={
        pc:FaWindows,
        linux:FaLinux,
        playstation3:SiPlaystation3,
        xbox:FaXbox,
        playstation4:SiPlaystation4,
        nintendo:BsNintendoSwitch,
        android:FaAndroid,
        macos:SiMacos,
        playstation5:SiPlaystation5

        


        



        
    }


    
  return (
    <Flex direction={"row"}>
        {platforms.map(item=>(
            <>
                {icon[item.slug]&&<Icon marginRight={"10px"} fontSize={"20px"} as={icon[item.slug]} />}
            </>
        ))}

    </Flex>
  )
}

export default Platfrom