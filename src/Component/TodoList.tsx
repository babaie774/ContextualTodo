/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import ListItem from './ListItem'
import FormInput from './FormInput'

export default function TodoList() {


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                                <FormInput />
                                <ul className="nav nav-pills todo-nav">
                                    <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                                    <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                                    <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                                </ul>
                                <div className="todo-list">
                                    <ListItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
