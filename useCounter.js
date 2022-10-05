import { useState } from "react"

export const useCounter = (initialValue = 10)=>{
    
    // const increment = 5;
    const [counter, setCounter] = useState(initialValue);

    const increaseCounter = (increment = 1)=>{
        // setCounter(counter + increment);//de esta manera el valor que coge siempre es el del counter
        setCounter((current)=>current + increment);//de esta manera el valor que coge siempre es el valor acutal del counter y para hacer las pruebas me facilita poder cambiar este estado de las variables -- revisar useCounter.test.js si dudas
        // setCounter((current)=>{return (current + increment)})
        
    }

    const decreaseCounter = (increment = 1) => {
        if(counter === 0) return;
        setCounter((current) =>current - increment);
    }

    const reset = ()=>{
        setCounter(initialValue);
    }
    
    return {
        counter,
        increaseCounter,
        decreaseCounter,
        reset  
    }
}