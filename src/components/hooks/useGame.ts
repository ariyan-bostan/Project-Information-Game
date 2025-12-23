import Platforms from "../Platforms";
import useData from "./useData"
import type { Genre } from "./useGenre";
import type { Platform } from "./usePlatform";

export interface Game{
    id:number,
    name:string,
    background_image:string,
    metacritic:number,
    platforms:{platform:Platform}[];
}


const useGame=(genre:Genre|null,platform:Platform|null,order?:string,searching?:string)=>{
    return useData<Game>("/games",{
        params:{
            genres:genre?.id,
            platforms:platform?.id,
            ordering:order,
            search:searching
        }
    },[genre?.id,platform?.id,order,searching]);
}

export default useGame;