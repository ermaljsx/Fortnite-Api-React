import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const[pending, setPending] = useState(true)
    const[Error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("could not recive data")
            }
            return res.json();
         })
        .then(data =>{
            setData(data);
            setPending(false);
            setError(null);
         })
         .catch(err =>{
             setPending(false)
             setError(err.mesaage)
         })

          
    },[url])

    return {data, pending, Error}

}
export default useFetch;