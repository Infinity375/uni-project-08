
import PostListItem from "./post-list-item/PostListItem";
import { useGetAllPosts } from "../../hooks/usePosts";

export default function PostBlog() {
    const [posts, setPosts] = useGetAllPosts([]);

    return (
        <section id="catalog-page">
            <h1>All posts</h1>

            {posts.length > 0
                ? posts.map(post => <PostListItem key={post._id} {...post} />)
                : <h3 className="no-articles">No posts yet</h3>
            }

        </section>
    )
}