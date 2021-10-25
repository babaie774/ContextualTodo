import React from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import HandleStatusContext from './Component/Contexts/HandleStatusContext'
import HandleInputTodo from './Component/Contexts/HandleInputTodo'
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
  const handleTodo = (event: any) => {

    console.log(event.target.value)
  }

  return (
    <TodoContext.Provider value={todo} >
      <HandleInputTodo.Provider value={{ HandleInputTodo: handleStatus }} >
        <HandleStatusContext.Provider value={{ handleStatus: handleTodo }} >
          <div>
            <TodoList />
          </div >
        </HandleStatusContext.Provider>
      </HandleInputTodo.Provider>
    </TodoContext.Provider >
  )
}
