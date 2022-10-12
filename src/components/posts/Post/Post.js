import {useDispatch} from "react-redux";
import {postsActions} from "../../../redux";

function Post({post}) {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>Id - {post.id}</h3>
            <p>Title - {post.title}</p>
            <button onClick={() => dispatch(postsActions.selectPost(post.id))}>Show details</button>
            <button onClick={() => {}}>Edit post</button>
            <button onClick={() => {}}>Delete post</button>
        </div>
    );
}

export {Post};
