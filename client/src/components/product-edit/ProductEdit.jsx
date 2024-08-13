import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { useGetOneProduct } from "../../hooks/useProducts";
import productsAPI from "../../api/products-api";

const initialValues = {
    title: '',
    manufacturer: '',
    category: '',
    shortDescription: '',
    description: '',
    price: '',
    imageUrl: '',
};

export default function ProductEdit() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useGetOneProduct(productId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, product), async (values) => {
        try {
            await productsAPI.update(productId, values);
            navigate(`/products/${productId}/details`);
        } catch (err) {
            console.log(err.message);

        }
    });

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Product</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title}
                        onChange={changeHandler}
                        placeholder="Enter product title..." />

                    <label htmlFor="manufacturer">Manufacturer:</label>
                    <input
                        type="text"
                        id="manufacturer"
                        name="manufacturer"
                        value={values.manufacturer}
                        onChange={changeHandler}
                        placeholder="Enter product manufacturer..." />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                        placeholder="Enter product category..." />

                    <label htmlFor="shortDescription">Short description:</label>
                    <textarea
                        name="shortDescription"
                        id="shortDescription"
                        value={values.shortDescription}
                        onChange={changeHandler}></textarea>

                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        value={values.description}
                        onChange={changeHandler}></textarea>

                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min="1"
                        value={values.price}
                        onChange={changeHandler}
                        placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..." />

                    <input className="btn submit" type="submit" value="Edit Product" />

                </div>
            </form>
        </section>
    )
}