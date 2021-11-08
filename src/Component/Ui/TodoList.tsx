/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import TodoStateContext from '../Contexts/TodoStateContext'
import TodoItem from './TodoItem/TodoItem'
import AddTodoForm from './TodoItem/AddTodoForm'


const TodoList: React.FC<any> = (props) => {
    const todoes = useContext(TodoStateContext)

    const TodoItems = todoes.map((items, key) => {
        return <TodoItem index={key} TodoData={items} />
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-white">
                        <div className="card-body">
                            <AddTodoForm />
                            <ul className="nav nav-pills todo-nav">
                                <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a>
                                </li>
                                <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a>
                                </li>
                                <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                            </ul>
                            <div className="todo-list">
                                {TodoItems}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList 