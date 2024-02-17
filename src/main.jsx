import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { TodosProvider } from './context/todosContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TodosProvider>
        <ChakraProvider>
              <App />
          </ChakraProvider>
      </TodosProvider>
  </React.StrictMode>,
)
