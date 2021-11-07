import React, { Provider } from 'react'
import TodoList from './Component/TodoList'
import './Style/Style.css'
import TodoReducer from './Component/Reducers/TodoReducer'
import TodoContext from './Component/Contexts/TodoContext'

export default function App() {


  return (
    <div>
      <TodoContext.Provider value={TodoReducer as any} >
        <TodoList />
      </TodoContext.Provider >
    </div >
  )
}
