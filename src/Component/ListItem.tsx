/* eslint-disable no-useless-rename */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import HandleStatusContext from './Contexts/HandleStatusContext'
import todoContext from './Contexts/TodoContext'

type ListItemProps = {
    filter: string
}

const ListItem: React.FC<ListItemProps> = ({ filter }) => {
    const todoList = useContext(todoContext);
    const { StatusTodo: handleStatusTodo } = useContext(HandleStatusContext);
    const filteredTodos = filter !== 'all' ? todoList.filter((todo: any) => todo.status === filter) : todoList;
    const todoes = filteredTodos.map((todo: any, index: number) => {
        const checked = todo.status === 'completed' ? true : false;
        return (
            <div key={index} className="todo-item">
                <div className="checker"><span className=""><input onClick={() => handleStatusTodo(todo.id)} type="checkbox" checked={checked} readOnly /></span></div>
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

export default ListItem