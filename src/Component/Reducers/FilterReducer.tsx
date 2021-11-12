type action = {
    type: string;
    payload: string;
}


export const FilterReducer = (state: string, action: action) => {
    console.log('HandleFilter', action);
    switch (action.type) {
        case 'All':
            return action.payload;
        case 'ACTIVE':
            return action.payload;
        case 'COMPLETED':
            return action.payload;
        default:
            return state
    }
}