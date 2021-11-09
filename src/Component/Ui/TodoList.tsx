/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AddTodoForm from './TodoItem/AddTodoForm'
import TodoItems from './TodoItem/TodoItems'


const TodoList: React.FC = () => {
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
                            <TodoItems />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList 