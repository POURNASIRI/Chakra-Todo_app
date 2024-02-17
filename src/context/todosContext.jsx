import { Children, createContext, useContext, useEffect, useReducer, useRef } from "react";
import todosReducer from "../reducer/todosReducer";

const TodosContext = createContext()

const TodosDispatch = createContext()



export function TodosProvider({children}){

    

    const[todos,dispatch] = useReducer(todosReducer,JSON.parse(localStorage.getItem("Todos")) || [])

        useEffect(()=>{
            localStorage.setItem("Todos",JSON.stringify(todos))
        },[todos])
    
     return(
            <TodosContext.Provider value={todos}>
                <TodosDispatch.Provider value={dispatch}>
                    {children}
                </TodosDispatch.Provider>
            </TodosContext.Provider>
     )
}


export function useTodoContext(){
    return useContext(TodosContext)
}

export function useTodosDispatch(){
    return useContext(TodosDispatch)
}