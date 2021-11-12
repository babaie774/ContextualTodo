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
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <li role="presentation" className={`nav-item ${item}-task`} ><a href="#" className="nav-link" onClick={() => { dispatchFilter(HandleFilter(item)) }} >{item} </a></li>
    })

    return (
        <ul className="nav nav-pills todo-nav">
            {filterItem}
        </ul>
    )
}
