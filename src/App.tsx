import React, { useState, useEffect, useReducer } from 'react'
import Store from './Component/Contexts/Store'
import './Style/Style.css'
import { getData } from './Component/Services/HandleApi'
import { TodoReducer } from './Component/Reducers/TodoReducer'
import { FilterReducer } from './Component/Reducers/FilterReducer'
import TodoList from './Component/Ui/TodoList';
import Loading from './Component/Ui/Loading/Loading';



export default function App() {

  const todoInit: Array<object> = [{ id: 1, title: 'Todo 1', status: 'all' }];
  const filterInit: string = 'all'

  const [loading, setLoading] = useState(false);


  const [TodoState, dispatchState] = useReducer(TodoReducer, todoInit);
  const [FilterState, dispatchFilter] = useReducer(FilterReducer, filterInit)



  useEffect(() => {
    getData().then(res => {
      setTimeout(() => {
        setLoading(true)
        dispatchState({ type: 'GET', payload: res.data })
      }, 500)
    })
  }, [])

  console.log(FilterState)



  const valueStore = { FilterState, TodoState, dispatchState, dispatchFilter }

  return (
    <div>
      {loading === false ? <Loading /> :
        <Store.Provider value={valueStore} >
          <TodoList />
        </Store.Provider >
      }
    </div >
  )
}
