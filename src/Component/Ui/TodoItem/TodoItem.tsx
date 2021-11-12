/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from 'react'
import Store from '../../Contexts/Store'
import { ChangeStatus } from '../../Actions/TodoActions'


interface ITodo {
    index: number | string;
    TodoData: {
        id: number | string,
        title?: string,
        status?: string
    }
}



export default function TodoItem(props: ITodo) {

    const { dispatchState } = useContext(Store)

    const Checked = props.TodoData.status === 'active' ? false : true;

    const handleClick = (id: string | number) => {
        dispatchState(ChangeStatus(id)
        )
    }

    return (
        <div className="todo-item" >
            <div className="checker"><span className=""><input type="checkbox" onClick={() => { handleClick(props.TodoData.id) }} checked={Checked} readOnly /></span></div>
            <span>{props.TodoData.title}</span>
            <a href="javascript:void(0);" className="float-right remove-todo-item"><i
                className="icon-close"></i></a>
        </div>
    )
}
