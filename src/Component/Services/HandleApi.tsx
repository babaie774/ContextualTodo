import axios from 'axios';
import React from 'react'

const getData = async () => {
    const { data } = await axios.get('http://localhost:3004/todoes')
    return data
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

export { getData, postData, putData, deleteData }
