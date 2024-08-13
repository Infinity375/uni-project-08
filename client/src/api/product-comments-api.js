import requester from "./requester"


const BASE_URL = 'http://localhost:3030/data/productComments';

const create = (productId, text) => requester.post(BASE_URL, { productId, text });

const getAll = (productId) => {
    const params = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `author=_ownerId:users`
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);

}

const productCommentAPI = {
    create,
    getAll
}

export default productCommentAPI;