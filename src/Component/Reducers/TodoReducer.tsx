export const TodoReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET':
            return action.payload
        case 'ADD':
            return [...state, action.payload]
        case 'REMOVE':
            return state.filter((item: any) => item.id !== action.payload)
        default:
            return state
    }
}