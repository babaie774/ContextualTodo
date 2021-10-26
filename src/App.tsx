import React from 'react'
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

  const HandleNewTodo = (input: any) => {
    // console.log(input);

    // todo.push({
    //   id: todo.length + 1,
    //   content: event.target.value,
    //   status: "active"
    // })
  }

  const handleStatusTodo = (id: number) => {
    console.log(id);
    if (todo.id === id) {
      todo.status = !todo.status
    }
  }



  return (
    <TodoContext.Provider value={todo} >
      <InputTodoContext.Provider value={{ InputTodo: HandleNewTodo }} >
        <HandleStatusContext.Provider value={{ StatusTodo: handleStatusTodo }} >
          <div>
            <TodoList />
          </div >
        </HandleStatusContext.Provider>
      </InputTodoContext.Provider>
    </TodoContext.Provider >
  )
}
