// {
//     "quote_id": 1,
//     "quote": "I am not in danger, Skyler. I am the danger!",
//     "author": "Walter White",
//     "series": "Breaking Bad"
// }

import { useEffect, useState } from "react";

export const useFetch = (url)=> {

    const [state, setState] = useState({
        data: null, 
        isLoading: true, 
        hasError: null,
    })

    
    const getFetch = async()=>{
        setState({...state, isLoading: true});
        
        const resp = await fetch(url);
        const data = await resp.json();
        

        setState({
            data:data,
            isLoading: false,
            hasError: null,
        })
    }

    useEffect(()=>{
        getFetch(url);
    },
    [url]//vigila si el url cambia para disparar el efecto
    )

    
    return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
    };
}