import * as requester from './requester'

const BASE_URL = 'http://localhost:3030/data/posts'

export const getAll = () => requester.get(BASE_URL);

export const getOne = (postId) => requester.get(`${BASE_URL}/${postId}`);

export const create = (postData) => requester.post(`${BASE_URL}`, postData);

export const remove = (postId) => requester.del(`${BASE_URL}/${postId}`);

export const update = (postId, postData) => requester.put(`${BASE_URL}/${postId}`, postData)


const postsAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
}

export default postsAPI;