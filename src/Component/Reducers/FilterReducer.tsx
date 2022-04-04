type action = {
    type: string;
    payload: string;
}


export const FilterReducer = (state: string, action: action) => {
    switch (action.type) {
        case 'ALL':
            return action.payload;
        case 'ACTIVE':
            return action.payload;
        case 'COMPLETED':
            return action.payload;
        default:
            return state
    }
}