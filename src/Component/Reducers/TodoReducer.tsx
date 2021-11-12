export const TodoReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET':
            return action.payload
        case 'ADD':
            return [...state, action.payload]
        case 'CHANGE_STATUS':
            return state.map((todo: any) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        status: todo.status === 'active' ? 'completed' : 'active'
                    }
                }
                return todo
            })
        default:
            return state
    }
}