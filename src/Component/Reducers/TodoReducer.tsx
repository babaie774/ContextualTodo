import React, { useState, useReducer, useEffect } from 'react'
import { getData } from '../Services/HandleApi'

export default function TodoReducer() {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        //if you dont resolve the promise, the the promise will stay padding
        getData().then(res => {
            setTodo(res)
        })
    }, [])

    const TodoReducer = (todo: any, action: any) => {
        switch (action.type) {
            case 'ADD':
                return [...todo, action.payload]
            case 'REMOVE':
                return todo.filter((item: any) => item.id !== action.payload)
            default:
                return todo
        }
    }


    return (
        <div>

        </div>
    )

}
