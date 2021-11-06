import axios from 'axios';
import React from 'react'

export default function HandleApi() {
    const getData = () => {
        return axios.get('')
            .then(response => response.data)
            .then(data => data)
    }

    const postData = (data: any) => {
        return axios.post('https://jsonplaceholder.typicode.com/todos', data).then(response => response.data).then(data => data)
    }

    const putData = (data: any) => {
        return axios.put('https://jsonplaceholder.typicode.com/todos/1', data).then(response => response.data).then(data => data)
    }

    const deleteData = () => {
        return axios.delete('https://jsonplaceholder.typicode.com/todos/1').then(response => response.data).then(data => data)
    }

    return {
        getData,
        postData,
        putData,
        deleteData
    }
}
