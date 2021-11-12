type actinType = {
    type: string;
    payload: any;
}


export const TodoReducer = (state: any, action: actinType) => {
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