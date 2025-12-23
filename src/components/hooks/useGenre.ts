import useData from "./useData"

export interface Genre{
    id:string,
    name:string,
    image_background:string
}

const useGenre=()=>{
    return useData<Genre>("/genres");
}

export default useGenre