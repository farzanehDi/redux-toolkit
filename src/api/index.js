import axios from "axios";

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getAllPost = async () => {
    const {data} = await client.get('/posts');
    return data;
}

export {
    getAllPost
}