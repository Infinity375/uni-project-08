import { useEffect, useReducer, useState } from 'react';
import productCommentAPI from '../api/product-comments-api'

export function useCreateProductComment() {
    const createHandler = (productId, productComment) => productCommentAPI.create(productId, productComment);

    return createHandler;
}
function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.productComments.slice();
        case 'ADD_COMMENT':
            return [...state, action.productComment];
        default:
            return state;
    }
}

export function useGetAllComments(productId) {
    {/*const [comments, setComments] = useState([]);*/ }
    const [productComments, dispatch] = useReducer(commentsReducer, []);


    useEffect(() => {
        (async () => {
            const result = await productCommentAPI.getAll(productId);
            {/*setComments(result);*/ }

            dispatch({ type: 'GET_ALL', productComments: result });
        })();
    }, [productId]);

    return [productComments, dispatch];
}