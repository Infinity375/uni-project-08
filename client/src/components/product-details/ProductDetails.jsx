import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProduct } from "../../hooks/useProducts";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useCreateProductComment, useGetAllComments } from "../../hooks/useProductComments";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import productsAPI from "../../api/products-api";
import { useContext } from "react";

const initialValues = {
    comment: '',
};

export default function ProductDetails() {
    const { productId } = useParams();
    const [product] = useGetOneProduct(productId);
    const navigate = useNavigate();
    const { isAuthenticate, email, userId } = useAuthContext();
    const createComment = useCreateProductComment();
    const [productComments, dispatch] = useGetAllComments(productId);

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {  // Corrected here
        try {
            const newComment = await createComment(productId, comment);
            dispatch({ type: 'ADD_COMMENT', productComment: { ...newComment, author: { email } } });
        } catch (err) {
            console.log(err.message);
        }
    });

    const productDeleteHandler = async () => {
        try {
            const isConfirmed = confirm(`Are you sure you want to delete this ${product.title}?`);
            if (isConfirmed) {
                await productsAPI.remove(productId);
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    // Ensure product is loaded before rendering
    if (!product) {
        return <p>Loading...</p>;
    }

    const isOwner = userId === product._ownerId;

    return (
        <section id="game-details">
            <h1>Product Details</h1>
            <div className="info-section">

                <div className="product-header">
                    <img className="game-img" src={product.imageUrl} alt={product.title} />
                    <div>
                        <h1>{product.title}</h1>
                        <p className="type">{product.category}</p>
                        <h2>For 1: € {product.price}</h2>
                        <span className="levels">Manufacturer: {product.manufacturer}</span>
                    </div>
                </div>

                <p className="text">{product.description}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {productComments.map(productComment => (
                            <li key={productComment._id} className="comment">
                                <p>{productComment.author.email}: {productComment.text}</p>
                            </li>
                        ))}
                    </ul>
                    {productComments.length === 0 && (<p className="no-comment">No comments.</p>)}
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/products/${productId}/edit`} className="button">Edit</Link>
                        <a href="#" onClick={productDeleteHandler} className="button">Delete</a>
                    </div>
                )}
            </div>

            {isAuthenticate && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>

                        <input
                            className="btn submit"
                            type="submit"
                            value="Add Comment" />
                    </form>
                </article>
            )}
        </section>
    );
}
