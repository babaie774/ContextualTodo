import axios from 'axios';

const getData = async () => {
    const data = await axios.get('http://localhost:3004/todoes')
        .then(response => response).then(response => response).then(data => data)

    return data
}

const postData = (data: any) => {
    return axios.post('http://localhost:3004/posts', data).then(response => response.data).then(data => data)
}

const putData = (data: any) => {
    return axios.put('http://localhost:3004/posts', data).then(response => response.data).then(data => data)
}

const deleteData = () => {
    return axios.delete('http://localhost:3004/posts').then(response => response.data).then(data => data)
}


export { getData, postData, putData, deleteData }

