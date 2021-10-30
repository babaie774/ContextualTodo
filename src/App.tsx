import React, { useState } from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import HandleStatusContext from './Component/Contexts/HandleStatusContext'
import InputTodoContext from './Component/Contexts/InputTodoContext'
import TodoList from './Component/TodoList'
import './Style/Style.css'

export default function App() {

  const todo: any = [
    { id: 1, content: "task 1", status: "active" },
    { id: 2, content: "task 2", status: "active" },
  ]

  const [todoes, addtodoes] = useState(todo)

  const HandleNewTodo = (input: any) => {
    const { input: input2 } = input;
    addtodoes([...todoes, { id: todoes.length + 1, content: input2, status: "active" }])
  }




  const handleStatusTodo = (id: number) => {
    const newTodo = [...todoes]
    newTodo.map((item: any) => {
      if (item.id === id) {
        item.status = item.status === "active" ? "completed" : "active"
      }
      return newTodo
    })
    addtodoes(newTodo)
  }

  const handleFilterValue = (filter: string) => {
    const newTodo = [...todoes]
    if (filter === 'all') {
      addtodoes(newTodo)
    } else {
      const newTodoes = newTodo?.filter((item: any) => item.status === filter)
      addtodoes(newTodoes)
    }
  }





  return (
    <TodoContext.Provider value={todoes} >
      <InputTodoContext.Provider value={{ InputTodo: HandleNewTodo }} >
        <HandleStatusContext.Provider value={{ StatusTodo: handleStatusTodo }} >
          <div>
            <TodoList handleFilterValue={handleFilterValue} />
          </div >
        </HandleStatusContext.Provider>
      </InputTodoContext.Provider>
    </TodoContext.Provider >
  )
}
