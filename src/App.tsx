import React, { useState, useEffect, useReducer } from 'react'
import Store from './Component/Contexts/Store'
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
      console.log(res)
      setTimeout(() => {
        //for showing loading better
        dispatchState({ type: 'GET', payload: res.data })
        setLoading(true)
      }, 1500)
    })
  }, [])

  const valueStore = { FilterState, TodoState, dispatchState, dispatchFilter }

  return (
    <div>
      <Store.Provider value={valueStore as any} >
        {loading === false ? <Loading /> : <TodoList />}
      </Store.Provider >
    </div >
  )
}
