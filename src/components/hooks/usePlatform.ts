import useData from "./useData"

export interface Platform{
    id:number,
    name:string,
    slug:string
}

const usePlatform=()=>{
    return useData<Platform>("/platforms")
}

export default usePlatform;