import React from 'react'

export default function TodoItem() {
    return (
        <div className="todo-item">
            <div className="checker"><span className=""><input type="checkbox" /></span></div>
            <span>Create theme</span>
            <a href="javascript:void(0);" className="float-right remove-todo-item"><i
                className="icon-close"></i></a>
        </div>
    )
}
