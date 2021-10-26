/* eslint-disable no-useless-rename */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import HandleStatusContext from './Contexts/HandleStatusContext'
import todoContext from './Contexts/TodoContext'


export default function ListItem() {
    const todoList = useContext(todoContext);
    const { StatusTodo: handleStatusTodo } = useContext(HandleStatusContext);


    const todoes = todoList.map((todo: any, index) => {
        return (
            <div key={index} className="todo-item">
                <div className="checker"><span className=""><input onClick={() => handleStatusTodo(todo.id)} type="checkbox" /></span></div>
                <span>{todo.content}</span>
                <a href="#" className="float-right remove-todo-item"><i className="icon-close"></i></a>
            </div>
        )
    })

    return (
        <div>
            {todoes}
        </div>
    )
}
