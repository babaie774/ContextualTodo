import React, { useContext } from 'react'
import Store from '../../Contexts/Store'
import { HandleFilter } from '../../Actions/TodoActions'


export default function NavFilters() {
    const { dispatchFilter } = useContext(Store)

    const filters = [
        'all',
        'active',
        'completed'
    ]

    const filterItem = filters.map(item => {
        return <li role="presentation" onClick={() => { dispatchFilter(HandleFilter(item)) }} className={`nav-item ${item}-task`} ><a href="#" className="nav-link">{item}</a></li>
    })

    return (
        <ul className="nav nav-pills todo-nav">
            {filterItem}
        </ul>
    )
}
