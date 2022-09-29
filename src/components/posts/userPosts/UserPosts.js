import {useParams} from "react-router-dom";
import {postsService} from "../../../services/posts.service";
import {useEffect, useState} from "react";
import {Post} from "../Post/Post";

function UserPosts() {
    let {id} = useParams();
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getPostsOfUser(id).then(({data}) => setPosts(data));
    }, [id])

    return (
        <div>
            {posts.length ? posts.map((value, index) => <Post post={value} key={index}/>) : <div>Loading...</div>}

        </div>
    );
}

export {UserPosts};
