import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { useCreateProduct } from "../../hooks/useProducts";

const initalValues = {
    title: '',
    manufacturer: '',
    category: '',
    shortDescription: '',
    description: '',
    price: '',
    imageUrl: '',
};

export default function ProductCreate() {
    const navigate = useNavigate();
    const createProduct = useCreateProduct();
    const createHandler = async (values) => {
        try {
            const { _id: productId } = await createProduct(values);
            navigate(`/products/${productId}/details`);
        } catch (err) {
            console.log(err.message);
        }
    }
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initalValues, createHandler);
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Product</h1>
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

                    <input className="btn submit" type="submit" value="Create Product" />
                </div>
            </form>
        </section>
    )
}