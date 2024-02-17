
import { Box, Text } from '@chakra-ui/react'
import { useTodoContext } from '../context/todosContext'
import { Bar } from 'react-chartjs-2'
import   { Chart as ChartJS,CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)

export default function TodosChart() {

    const todos = useTodoContext()
    const allTodos = todos.length
    const completedTodos = todos?.filter(todo=>todo.completed).length
    const openTodos = allTodos - completedTodos

    const Data = {
        labels:['All Todos','completed Todos','Open Todos'],
        datasets:[
          {
            label:'Todos',
            data:[allTodos,completedTodos,openTodos],
            backgroundColor:['red','green','blue'],
            borderColor:'green',
            borderWidth:1
          }
        ]
      }

      if(!allTodos) return <Text fontWeight={"bold"} fontSize={"2xl"}
      >Your note List is empty</Text>
    
     
    
    
      return (
        <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        h={"fit-content"}
      >
        <Bar data={Data}  />
      </Box>
      )
}
