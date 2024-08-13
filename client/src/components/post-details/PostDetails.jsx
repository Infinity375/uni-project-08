import { useNavigate, useParams } from "react-router-dom";
import { useGetOneProduct } from "../../hooks/useProducts";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useCreateProductComment, useGetAllComments } from "../../hooks/useProductComments";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import productsAPI from "../../api/products-api";
import { useContext } from "react";
import { useGetOnePosts } from "../../hooks/usePosts";
import postsAPI from "../../api/posts-api";

const initialValues = {
    comment: '',
};

export default function PostDetails() {
    const { postId } = useParams();
    const [post] = useGetOnePosts(postId);
    const navigate = useNavigate();
    const { isAuthenticate, email, userId } = useAuthContext();
    const createComment = useCreateProductComment();
    const [productComments, dispatch] = useGetAllComments(postId);

    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => { 
        try {
            const newComment = await createComment(postId, comment);
            dispatch({ type: 'ADD_COMMENT', productComment: { ...newComment, author: { email } } });
        } catch (err) {
            console.log(err.message);
        }
    });

    const postDeleteHandler = async () => {
        try {
            const isConfirmed = confirm(`Are you sure you want to delete this ${post.title}?`);
            if (isConfirmed) {
                await postsAPI.remove(productId);
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    // Ensure product is loaded before rendering
    if (!post) {
        return <p>Loading...</p>;
    }

    const isOwner = userId === post._ownerId;

    return (
        <section id="game-details">
            <h1>Product Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={post.imageUrl} alt={post.title} />
                    <h1>{post.title}</h1>
                </div>

                <p className="text">{post.description}</p>

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
                        <Link to={`/posts/${postId}/edit`} className="button">Edit</Link>
                        <a href="#" onClick={postDeleteHandler} className="button">Delete</a>
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
