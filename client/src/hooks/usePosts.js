import { useState, useEffect } from "react";

import postsAPI from '../api/posts-api'

export function useGetAllPosts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await postsAPI.getAll();
            setPosts(result);
        })();
    }, []);

    return [posts, setPosts];
}

export function useGetOnePosts(postId) {
    const [posts, setPosts] = useState({});
    useEffect(() => {
        (async () => {
            const result = await postsAPI.getOne(postId);
            setPosts(result);
        })();
    }, [postId]);
    return [posts, setPosts];

}

export function useCreatePost() {
    const postCreateHandler = (postData) => postsAPI.create(postData);
    return postCreateHandler;
}
