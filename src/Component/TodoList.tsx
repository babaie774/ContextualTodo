/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import TodoListItem from './TodoListItem'

import TodoNav from './TodoNav'
import FromAddTodo from './FromAddTodo'

export default function TodoList() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                                <FromAddTodo />
                                <TodoNav />
                                <TodoListItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
