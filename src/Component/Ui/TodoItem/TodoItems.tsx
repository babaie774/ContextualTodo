import Store from '../../Contexts/Store'
import TodoItem from './TodoItem'
import { useContext } from 'react'
export default function TodoItems() {

    const { TodoState } = useContext(Store)
    const { FilterState } = useContext(Store)

    interface ITodo {
        id: number | string,
        title: string,
    }

    const filteredTodo = FilterState !== 'all' ? TodoState.filter((item) => { return item.status === FilterState }) : TodoState
    const TodoItems = filteredTodo.map((items: ITodo) => {
        return <TodoItem index={items.id} TodoData={items} />
    })

    return (
        <div className="todo-list">
            {TodoItems}
        </div>
    )
}
