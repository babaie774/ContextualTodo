/* eslint-disable no-useless-rename */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import TodoContext from './Contexts/TodoContext'
import HangleStatusContext from './Contexts/HangleStatusContext';


export default function TodoListItem() {
    const todoList = useContext(TodoContext);
    const { handleStatus: handleStatus } = useContext(HangleStatusContext);

    const todoes = todoList.map((todo: any, index) => {
        return (
            <div key={index} className="todo-item">
                <div className="checker"><span className=""><input onClick={() => { handleStatus() }} type="checkbox" /></span></div>
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
