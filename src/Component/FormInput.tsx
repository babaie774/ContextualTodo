/* eslint-disable no-script-url */
import React, { useState, useContext } from 'react'
import InputTodoContext from '../Component/Contexts/InputTodoContext'

export default function FormInput() {

    const [input, setInput] = useState<any>({});
    const { InputTodo: HandleNewTodo } = useContext(InputTodoContext);

    const HandleInputTodo = (event: any) => {
        setInput({ input: event.target.value });
        // console.log(event);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // console.log('OK')
        HandleNewTodo(input);
        setInput({ input: '' });
    }

    const val = input?.input;


    return (
        <div>
            <form action="javascript:void(0);" onSubmit={(event) => { handleSubmit(event) }}>
                <input type="text" value={val} className="form-control add-task" onChange={(event) => { HandleInputTodo(event) }} placeholder="New Task..." />
            </form>
        </div>
    )
}
