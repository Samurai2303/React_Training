import {useDispatch, useSelector} from "react-redux";
import {PostFromApi, Posts, SelectedPost} from "../../components";
import css from './postsPage.module.css';
import {useEffect} from "react";
import {postsActions} from "../../redux";

function PostsPage() {

    let dispatch = useDispatch();

    let {posts, postsLoading, postsError} = useSelector(state => state.postsReducer);

    useEffect(() => {
        dispatch(postsActions.getAll());
    }, [])

    return (
        <div className={css.wrap}>
            {postsLoading && <div>Loading...</div>}
            {postsError && <div>Error(</div>}
            {postsLoading ? false : postsError ? false : <Posts posts={posts}/>}
            {<SelectedPost/>}
            {<PostFromApi/>}
        </div>
    );
}

export {PostsPage};
