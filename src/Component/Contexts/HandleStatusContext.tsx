import React from 'react'

const HandleStatusContext = React.createContext(
    {
        StatusTodo: (id: number) => { }
    }
);

export default HandleStatusContext;
