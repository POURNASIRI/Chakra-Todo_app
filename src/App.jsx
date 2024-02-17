import "./App.css";

import { Box, Text } from "@chakra-ui/react";
import AddNewTodo from "./components/AddNewTodo";
import TodosList from "./components/TodosList";
import TodosChart from "./components/TodosChart";




function App() {

    
    
  return (
    <Box minH={"100vh"}>
          <Text fontSize={'3xl'} borderBottom={"1px"}
    borderColor={"gray.200"} >TODO APP</Text>
        <Box display={"flex"} gap={4} pt={10}>
          <Box display={"flex"} flexDir={"column"} gap={4}flex={1} >
            <AddNewTodo/>
            <TodosList/>
          </Box>
          <Box display={"flex"} flex={1}>
            <TodosChart/>
          </Box>
        </Box>
    </Box>
  )
}

export default App;
