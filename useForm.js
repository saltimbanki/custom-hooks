import { useState } from "react";

export const useForm = (initialForm = {}) =>{

    // {
    //     username: '',
    //     email: '',
    //     password: ''
    // }



    const [formState, setFormState] = useState(initialForm)


    const onInputChange = (evento)=>{
        const {target} = evento;//se podria desestructurar en el parametro pero me parece mas claro asi para saber que la funcion recibe un evento
        const {name, value} = target;
        setFormState({ ...formState, [name]:value})
    }

    const onResetForm = ()=>{
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}