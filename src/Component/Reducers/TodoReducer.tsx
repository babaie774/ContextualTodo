export const TodoReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET':
            return action.payload
        case 'ADD':
            return [...state, action.payload]
        default:
            return state
    }
}