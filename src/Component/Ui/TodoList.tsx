/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AddTodoForm from './TodoItem/AddTodoForm'
import TodoItems from './TodoItem/TodoItems'
import NavFilters from './TodoItem/NavFilters'


const TodoList: React.FC = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-white">
                        <div className="card-body">
                            <AddTodoForm />
                            <NavFilters />
                            <TodoItems />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList 