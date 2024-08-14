import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { useCreatePost } from "../../hooks/usePosts";

const initialValues = {
    title: '',
    shortDescription: '',
    description: '',
    imageUrl: '',
};

export default function PostCreate() {
    const navigate = useNavigate();
    const createPost = useCreatePost();
    const createHandler = async (values) => {
        try {
            const { _id: postId } = await createPost(values);
            navigate(`/posts/${postId}/details`);
        } catch (err) {
            console.log(err.message);
        }
    }
    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, createHandler);
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Create Post</h1>
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

                    <input className="btn submit" type="submit" value="Create Post" />
                </div>
            </form>
        </section>
    )
}