import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import postsAPI from "../../api/posts-api";
import { useGetOnePosts } from "../../hooks/usePosts";

const initialValues = {
    title: '',
    shortDescription: '',
    description: '',
    imageUrl: '',
};

export default function PostEdit() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useGetOnePosts(postId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, post), async (values) => {
        try {
            await postsAPI.update(postId, values);
            navigate(`/posts/${postId}/details`);
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
                        placeholder="Enter post title..." />

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

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={changeHandler}
                        placeholder="Upload a photo..." />

                    <input className="btn submit" type="submit" value="Edit Postt" />

                </div>
            </form>
        </section>
    )
}