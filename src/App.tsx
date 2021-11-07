import React, { useState, useEffect } from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import HandleStatusContext from './Component/Contexts/HandleStatusContext'
import InputTodoContext from './Component/Contexts/InputTodoContext'
import TodoList from './Component/TodoList'
import './Style/Style.css'
import { getData } from './Component/Services/HandleApi'



export default function App() {

  const data = getData();
  console.log(data)


  const todo: any = [
    { id: 1, content: "task 1", status: "completed" },
    { id: 2, content: "task 2", status: "active" },
  ]

  const [todoes, setTodoes] = useState(todo)
  const [filter, setFilter] = useState("active");


  const HandleNewTodo = (input: any) => {
    const { input: input2 } = input;
    setTodoes([...todoes, { id: todoes.length + 1, content: input2, status: "active" }])
  }




  const handleStatusTodo = (id: number) => {
    const newTodo = [...todoes]
    newTodo.map((item: any) => {
      if (item.id === id) {
        item.status = item.status === 'active' ? 'completed' : 'active'
      }
      return newTodo
    })
    setTodoes(newTodo)
  }


  const handleFilterValue = (filter: string) => {
    setFilter(filter);
  };

  return (
    <TodoContext.Provider value={todoes} >
      <InputTodoContext.Provider value={{ InputTodo: HandleNewTodo }} >
        <HandleStatusContext.Provider value={{ StatusTodo: handleStatusTodo }} >
          <div>
            <TodoList handleFilterValue={handleFilterValue} filter={filter} />
          </div >
        </HandleStatusContext.Provider>
      </InputTodoContext.Provider>
    </TodoContext.Provider >
  )
}
