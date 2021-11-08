import React, { useState, useEffect, useReducer } from 'react'
import TodoStateContext from './Component/Contexts/TodoStateContext'
import TodoDispatchContext from './Component/Contexts/TodoDispatchContext'
import './Style/Style.css'
import { getData } from './Component/Services/HandleApi'
import { TodoReducer } from './Component/Reducers/TodoReducer'
import { FilterReducer } from './Component/Reducers/FilterReducer'
import TodoList from './Component/Ui/TodoList';
import Loading from './Component/Ui/Loading/Loading';



export default function App() {

  const todoInit: Array<object> = [];
  const filterInit: string = 'All'

  const [TodoState, dispatchState] = useReducer(TodoReducer, todoInit);
  const [FilterState, dispatchFilter] = useReducer(FilterReducer, filterInit)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData().then(res => {
      setTimeout(() => {
        //for showing loading better
        dispatchState({ type: 'GET', payload: res.data })
        setLoading(true)
      }, 1500)
    })
  }, [])


  console.log(TodoState)

  return (
    <div>
      <TodoStateContext.Provider value={TodoState as any} >
        <TodoDispatchContext.Provider value={dispatchState}>
          {loading === false ? <Loading /> : <TodoList />}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider >
    </div >
  )
}
