import React, { useContext } from 'react'
import Store from '../../Contexts/Store'
import { HandleFilter } from '../../Actions/TodoActions'
import Button from '@mui/material/Button'


export default function NavFilters() {
    const { dispatchFilter } = useContext(Store)

    const filters = [
        'all',
        'active',
        'completed'
    ]

    const filterItem = filters.map(item => {
        return <Button variant="contained" color="primary" sx={{ m: 0.5 }} onClick={() => { dispatchFilter(HandleFilter(item)) }}>{item}</Button>
    })

    return (
        <ul className="nav nav-pills todo-nav">
            {filterItem}
        </ul>
    )
}
