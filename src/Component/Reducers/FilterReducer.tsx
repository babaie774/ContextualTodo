export const FilterReducer = (state: any, action: any) => {
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