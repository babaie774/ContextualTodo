import React from 'react'
import MyContext from './Component/MyContext'
import TodoList from './Component/TodoList'
import './Style/Style.css'

export default function App() {

  const todo: any = [
    { id: 1, content: "task 1", status: "complete" },
    { id: 1, content: "task 2", status: "complete" },
  ]
  return (
    <MyContext.Provider value={todo}>
      <div>
        <TodoList />
      </div >
    </MyContext.Provider>
  )
}
