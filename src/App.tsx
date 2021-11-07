import React, { useState, useEffect, useReducer } from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import './Style/Style.css'
import TodoReducer from './Component/Reducers/TodoReducer'
import { getData } from './Component/Services/HandleApi'



export default function App() {


  const [todo, setTodo] = useState();

  useEffect(() => {
    
  }, [])


  const [state, dispatch] = useReducer(TodoReducer, todo);
  const [loading, setLoading] = useState(false);

  const content = !state ? <h1>Loading...</h1> : <h1>content</h1>

  if (!state) {
    getData().then((res: any) => {
      console.log("OK")
      setTodo(res.data)
    })
  } (state) {
    setLoading(true)
    console.log(state)
  }



  console.log(state);
  console.log(todo);
  console.log(dispatch);


  return (
    <div>
      <TodoContext.Provider value={state as any} >
        {content}
      </TodoContext.Provider >
    </div >
  )
}
