import Store from '../../Contexts/Store'
import TodoItem from './TodoItem'
import { useContext } from 'react'
export default function TodoItems() {

    const { TodoState } = useContext(Store)

    interface ITodo {
        id: number | string,
        title: string,
    }

    const TodoItems = TodoState.map((items: ITodo) => {
        return <TodoItem index={items.id} TodoData={items} />
    })

    return (
        <div className="todo-list">
            {TodoItems}
        </div>
    )
}
