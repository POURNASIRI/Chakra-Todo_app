import { useState } from "react"
import { Box, Button,  Heading, Input, VStack } from '@chakra-ui/react'
import {
    FormControl,
  } from '@chakra-ui/react'
import { useTodosDispatch } from "../context/todosContext"



function AddNewTodo() {

    const dispatch = useTodosDispatch()

    const[title,setTitle] = useState("")

   


   const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title) return;
        const newTodo ={
            id:Math.floor(Math.random() * 1000),
            title,
            createdAt:new Date().toISOString(),
            completed:false
        }
        dispatch({type:"addTodo", payload:newTodo})
        setTitle("")
        
   }

   
 
  return (
    <Box 
    w={['full']} 
    p={[0,10]}
    mx='auto'
    border={['none','1px']}
    borderColor={['',"gray.200"]}
    borderRadius={10}
    >
      <VStack spacing={4} align={"flex-start"} w={'full'}>
        <VStack alignItems={"center"} w={'full'}>
          <Heading>ADD Todo</Heading>
        </VStack>
          <FormControl isRequired onSubmit={handleSubmit}>
            <Input 
            shadow={"sm"}
            rounded={"md"}
            type="text"
            size={"md"}
            h={14}
            border={"1px"} borderColor={"gray.200"} 
            placeholder="Write here..."
            value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </FormControl>
          <Button 
          w={'full'}
          type="submit"
          onClick={handleSubmit} colorScheme={"blue"}>Add</Button>
      </VStack>
    </Box>
  )
}

export default AddNewTodo