import {useDispatch} from "react-redux";
import {postsActions} from "../../../redux";

function Post({post}) {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>Id - {post.id}</h3>
            <p>Title - {post.title}</p>
            <button onClick={() => {dispatch(postsActions.select(post.id))}}>Select post</button>
            <button onClick={() => {dispatch(postsActions.getById({id: post.id}))}}>Get from Api</button>
            <button onClick={() => {dispatch(postsActions.deletePost(post.id))}}>Delete post</button>
        </div>
    );
}

export {Post};
