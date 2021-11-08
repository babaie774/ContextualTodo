import uniqid from 'uniqid';

export const AddTodoAction = (text: string) => {
    console.log('AddTodoAction', text);
    return {
        type: 'ADD',
        payload: {
            id: uniqid(),
            title: text,
        }
    };
}
