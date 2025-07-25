import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
interface FetchResponse<T>{
    count:number;
    results:T[]
}
const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => setData(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError)return;
        setError(err.message);
      })
      .finally(()=>setIsLoading(false));
  }, deps?[...deps]:[]);
  return { data, error, isLoading };
};
export default useData;
