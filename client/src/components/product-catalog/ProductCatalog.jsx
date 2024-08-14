
import ProductListItem from "./product-list-item/ProductListItem";
import { useGetAllProducts } from "../../hooks/useProducts"

export default function ProductCatalog() {
    const [products, setProducts] = useGetAllProducts([]);

    return (
        <section className="home-block">
            <h1 className="title-h1">All Products</h1>

            {products.length > 0
                ? products.map(product => <ProductListItem key={product._id} {...product} />)
                : <h3 className="no-articles">No products yet</h3>
            }

        </section>
    )
}