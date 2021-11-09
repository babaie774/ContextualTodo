import uniqid from 'uniqid';

export const AddTodoAction = (text: string) => {
    console.log('AddTodoAction', text);
    return {
        type: 'ADD',
        payload: {
            id: uniqid(),
            title: text,
            status: 'active'
        }
    };
}

export const HandleFilter = (item: string) => {
    return {
        type: item.toUpperCase(),
        payload: item
    }
}