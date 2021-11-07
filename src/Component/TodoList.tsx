import React, { useContext } from 'react'
import TodoContext from './Contexts/TodoContext'


const TodoList: React.FC<any> = (props) => {
    const todo = useContext(TodoContext)
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                                <p>{props.state}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TodoList 