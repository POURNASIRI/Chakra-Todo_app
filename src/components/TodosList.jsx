import { Box, Button, Flex, Text,Checkbox } from "@chakra-ui/react"

import { useTodoContext, useTodosDispatch } from "../context/todosContext"

function NoteList() {


    const todos = useTodoContext()
 

   
    if(!todos.length) return <Text fontWeight={"bold"} fontSize={"2xl"}
    >Your Todo List is empty</Text>
    
  return (
    <div className="note-list">
        {
            todos?.map(todo=>{
               return(
                <TodoItem
                key={todo.id}
                todo={todo}
                />
               ) 
            })
        }
    </div>
  )
}

export default NoteList




export function TodoItem({todo}){
    const dispatch = useTodosDispatch()
   
    return(
       <Flex flexDir={"column"} gap={2} mt={4} shadow={"lg"}
       border={"1px"} borderColor={"blue.200"} p={4}
       borderRadius={10} bgColor={`${ todo.completed ? "gray.200" : "white"}`} > 
       <Flex display={"flex"} w={"full"} justifyContent={"space-between"}>
           <Box >
            <Text
            textDecoration={todo.completed ? "line-through" : "none"}
            fontWeight={"bold"} fontSize={"xl"}>{todo.title}</Text>
           </Box>
           <Box display={"flex"} gap={2} alignItems={"center"}>
           <Checkbox 
              onChange={()=>dispatch({type:"completed", payload:todo.id})}
              colorScheme='green'
               isChecked={todo.completed}
             >
             </Checkbox>
            <Button
            onClick={()=>dispatch({type:"removeTodo", payload:todo.id})}
            bgColor={"red.500"}
            _hover={{bgColor:"red.600"}}
            >Delete</Button>
           </Box>
       </Flex>
       <Box
       borderTop={"1px"} borderColor={"gray.200"}
       display={"flex"} w={"full"} justifyContent={"center"}>
        <Text>
        {new Date(todo.createdAt).toLocaleDateString("en-US",{
        year:"numeric",
        month:"long",
        day:"numeric"
    })}
        </Text>
       </Box>
       </Flex>
    )
}




