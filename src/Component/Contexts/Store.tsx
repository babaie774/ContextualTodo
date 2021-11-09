import React from 'react'

interface ITodo {
    id: number | string,
    title: string,
    status: string,
}

type DispatchStateType = {
    type: string,
    payload: ITodo
}

type dispatchFilter = {
    type: string,
    payload: string
}

type contextType = {
    FilterState: string,
    TodoState: ITodo[],
    dispatchState: (dispatch: DispatchStateType) => void,
    dispatchFilter: (dispatch: dispatchFilter) => any,
}
const Store = React.createContext({} as contextType)

export default Store;
