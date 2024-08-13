import * as requester from './requester'

const BASE_URL = 'http://localhost:3030/data/products'

export const getAll = () => requester.get(BASE_URL);

export const getOne = (productId) => requester.get(`${BASE_URL}/${productId}`);

export const create = (productData) => requester.post(`${BASE_URL}`, productData);

export const remove = (productId) => requester.del(`${BASE_URL}/${productId}`);

export const update = (productId, productData) => requester.put(`${BASE_URL}/${productId}`, productData)


const productsAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
}

export default productsAPI;