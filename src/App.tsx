import React, { useState, useEffect, useReducer } from 'react'
import TodoContext from './Component/Contexts/TodoContext'
import './Style/Style.css'
import { getData } from './Component/Services/HandleApi'
import { TodoReducer } from './Component/Reducers/TodoReducer'
import { FilterReducer } from './Component/Reducers/FilterReducer'
import TodoList from './Component/Ui/TodoList';
import Loading from './Component/Ui/Loading';



export default function App() {

  useEffect(() => {
    getData().then(res => {
      setTimeout(() => {
        //for showing loading better
        dispatchState({ type: 'GET', payload: res.data })
        setLoading(true)
      }, 1500)
    })
  }, [])


  const todoInit: Array<object> = [];
  const filterInit: string = 'All'

  const [TodoState, dispatchState] = useReducer(TodoReducer, todoInit);
  const [FilterState, dispatchFilter] = useReducer(FilterReducer, filterInit)

  const [loading, setLoading] = useState(false);


  return (
    <div>
      <TodoContext.Provider value={TodoState as any} >
        {loading === false ? <Loading /> : <TodoList />}
      </TodoContext.Provider >
    </div >
  )
}
