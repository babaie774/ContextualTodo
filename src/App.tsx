import React, { useState, useEffect, useReducer } from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import './Style/Style.css'
import { getData } from './Component/Services/HandleApi'
import TodoList from './Component/TodoList';



export default function App() {


  const todo: any = [];

  useEffect(() => {
    getData().then(res => {
      dispatch({ type: 'GET', payload: res.data })
      setLoading(true)
    })
  }, [])

  const TodoReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'GET':
        return action.payload
      case 'ADD':
        return [...state, action.payload]
      case 'REMOVE':
        return state.filter((item: any) => item.id !== action.payload)
      default:
        return state
    }
  }


  const [state, dispatch] = useReducer(TodoReducer, todo);
  const [loading, setLoading] = useState(false);


  const content = loading === false ? <h1>Loading...</h1> : <h1>content</h1>

  // state.map((item: any) => {
  //   console.log(item)
  // })

  return (
    <div>
      <TodoContext.Provider value={state as any} >
        {content}
        <TodoList />
      </TodoContext.Provider >
    </div >
  )
}
