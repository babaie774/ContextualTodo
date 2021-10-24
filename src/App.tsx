import React from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import HandleStatusContext from './Component/Contexts/HandleStatusContext'
import TodoList from './Component/TodoList'
import './Style/Style.css'

export default function App() {

  const todo: any = [
    { id: 1, content: "task 1", status: "complete" },
    { id: 1, content: "task 2", status: "complete" },
  ]

  const handleStatus = () => {
    console.log("clicked")
  }

  return (
    <TodoContext.Provider value={todo} >
      <HandleStatusContext.Provider value={{ handleStatus: handleStatus }} >
        <div>
          <TodoList />
        </div >
      </HandleStatusContext.Provider>
    </TodoContext.Provider>
  )
}
