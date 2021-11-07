import React, { useState, useEffect } from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import TodoList from './Component/TodoList'
import './Style/Style.css'
import { getData } from './Component/Services/HandleApi'


export default function App() {

  const data = getData();
  console.log(data)

  return (
    <div>
      <TodoContext.Provider value={TodoReducer as any} >
        <TodoList />
      </TodoContext.Provider >
    </div >
  )
}
