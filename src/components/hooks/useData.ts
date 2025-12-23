import { useEffect, useState } from "react";
import ApiService from "../Services/ApiService";
import { CanceledError, type AxiosRequestConfig } from "axios";

interface Response <T>{
    results:T[];
}

 const useData=<T>(endpoint:string,filter?:AxiosRequestConfig,arrayDep?:any[])=>{
    const [data,setData]=useState<T[]>([]);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const abort=new AbortController();
        setLoading(true);
        ApiService.get<Response<T>>(endpoint,{signal:abort.signal,...filter})
                    .then(res=>{
                        setLoading(false);
                        setData(res.data.results);
                    }).catch(err=>{
                        setLoading(false);
                        if(!(err instanceof CanceledError))
                            setError(err.message);
                    });
        return ()=>{
            abort.abort();
        }
    },arrayDep?[...arrayDep]:[]);

    return {data,error,loading}

}
export default useData;