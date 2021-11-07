import React, { useContext } from 'react'
import TodoContext from './Contexts/TodoContext'


const TodoList: React.FC<any> = (props) => {
    const todo = useContext(TodoContext)
    todo((data: any) => {
        console.log(data)
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TodoList 