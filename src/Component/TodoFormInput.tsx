import React, { useContext } from 'react'
import HandleInputTodo from '../Component/Contexts/HandleInputTodo'

export default function TodoFormInput() {
    const { HandleInputTodo: handleStatus } = useContext(HandleInputTodo);

    return (
        <div>
            <form action="javascript:void(0);">
                <input type="text" className="form-control add-task" onClick={(e) => handleStatus(e)} placeholder="New Task..." />
            </form>
        </div>
    )
}
