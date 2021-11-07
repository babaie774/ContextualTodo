const TodoReducer = (todo: any, action: any) => {
    switch (action.type) {
        case 'ADD':
            return [...todo, action.payload]
        case 'REMOVE':
            return todo.filter((item: any) => item.id !== action.payload)
        default:
            return todo
    }
}

export default TodoReducer