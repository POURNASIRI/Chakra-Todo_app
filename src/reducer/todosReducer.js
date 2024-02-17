export default function noteReducer(state,action){
    const{type,payload} = action
    switch(type){
        case "addTodo":{
               return [...state,payload]
        }
        case "removeTodo":{
            return state.filter(note=>note.id !== payload)
        }
        case "completed":{
            return state.map(item=>item.id === payload ?{...item,completed:!item.completed}:item)
        }
        default:{
            return;
        }
    }
}