import uniqid from 'uniqid';

export const AddTodoAction = (text: string) => {
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


export const ChangeStatus = (id: string | number) => {
    return {
        type: 'CHANGE_STATUS',
        payload: {
            id: id,
        }
    }
}