import {useState, useEffect} from 'react';
function useFetch(url){
const [data, setData] = useState([])
const [error, setError] = useState(null)

    useEffect(() => {

        const abortCont = new AbortController();
           fetch(url, {signal: abortCont.signal})
           .then(res => {
               if(!res.ok)
               {
                   throw Error('Failed to load....');
               }
               return res.json();
           })  
           .then(data => {
               setData(data);
           })
           .catch(err => {
               if(err.name === 'AbortError'){
                   console.log('fetch aborted')
               }
               else{
                setError(err.message);
               }
           })
           return () => abortCont.abort();
    }, [url]);
    return { data, error }
}
export default useFetch;