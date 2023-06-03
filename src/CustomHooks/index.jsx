import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [fetchInfo, setFetchInfo] = useState({
        isLoading: false,
        isFetched: false,
        isError: false,
        data: null
    });

    useEffect(()=>{
        setFetchInfo(
            state => ({
                ...state,
                isLoading: true
            })
        )

        fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                setFetchInfo({
                    isLoading: false,
                    isFetched: true,
                    isError: false,
                    data
                })
            })
            .catch(error=>{
                setFetchInfo({
                    isLoading: false,
                    isFetched: true,
                    isError: true,
                    data: error
                })
            })
    },[])

    return fetchInfo
}


export const CustomHooks = () => {
    const fetchInfo = useFetch("https://jsonplaceholder.typicode.com/users");

    console.log(fetchInfo);

    return <div>
        <h1>CustomHooks</h1>
    </div>
}