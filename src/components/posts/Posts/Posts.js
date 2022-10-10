import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsActions} from "../../../redux";
import {Post} from "../Post/Post";

function Posts() {

    let {posts, postsLoading, postsError} = useSelector(state => state.postsReducer());
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(postsActions.getAll());
    }, []);

    return (
        <div>
            {postsLoading && <div>Loading posts...</div>}
            {postsError && <div>Error(</div>}
            {postsLoading ? false : postsError ? false : posts ?
                posts.map((value, index) => <Post post={value} key={index}/>) : <div>Have no posts</div>}

        </div>
    );
}

export {Posts};
