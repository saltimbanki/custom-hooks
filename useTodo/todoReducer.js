export const todoReducer = (initialState, action) =>{
    switch (action.type) {
        case '[TODO] Add Todo':
            
            return [...initialState, action.payload];
            
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);
        
        case '[TODO] Toggle Todo':
            console.log('toggle');
            // let item = initialState.find(todo=>todo.id === action.payload);
            // item.done = !item.done;
            // console.log(item);
            // item.done = !item.done;
            // return [resto, item];
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    // todo.done = !todo.done;
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
            // return [...initialState]
        default:
            return initialState;
            
    }
}