/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import ListItem from './ListItem'
import TodoNav from './TodoNav'
import FormInput from './FormInput'

type TodoNavProps = {
    handleFilterValue: (filter: string) => void
    filter: string
}

const TodoList: React.FC<TodoNavProps> = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                                <FormInput />
                                <TodoNav handleFilterValue={props.handleFilterValue} />
                                <ListItem filter={props.filter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TodoList 