import { useState, useEffect } from "react";

import productsAPI from '../api/products-api'

export function useGetAllProducts() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await productsAPI.getAll();
            setProducts(result);
        })();
    }, []);

    return [products, setProducts];
}

export function useGetOneProduct(productId) {
    const [products, setProducts] = useState({});
    useEffect(() => {
        (async () => {
            const result = await productsAPI.getOne(productId);
            setProducts(result);
        })();
    }, [productId]);
    return [products, setProducts];

}

export function useCreateProduct() {
    const productCreateHandler = (productData) => productsAPI.create(productData);
    return productCreateHandler;
}
