/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


interface ITodo {
    index: number | string;
    TodoData: {
        id: number | string,
        title: string,
    }
}



export default function TodoItem(props: ITodo) {
    return (
        <div className="todo-item">
            <div className="checker"><span className=""><input type="checkbox" /></span></div>
            <span>{props.TodoData.title}</span>
            <a href="javascript:void(0);" className="float-right remove-todo-item"><i
                className="icon-close"></i></a>
        </div>
    )
}
