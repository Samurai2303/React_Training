import {useEffect, useState} from "react";
import {postsService} from "../../../services";
import {Post} from "../Post/Post";

function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data));
    }, []);


    return (
        <div>
            {posts.length ? posts.map((value, index) => <Post post={value} key={index}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Posts};
