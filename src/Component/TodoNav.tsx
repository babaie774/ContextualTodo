/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function TodoNav() {
    return (
        <ul className="nav nav-pills todo-nav">
            <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
            <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
            <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
        </ul>
    )
}
