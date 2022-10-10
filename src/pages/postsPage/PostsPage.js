import {PostForm, Posts, SelectedPost} from "../../components";
import css from './postsPage.module.css';

function PostsPage() {

    return (
        <div className={css.wrap}>
            <Posts/>
            <SelectedPost/>
            <PostForm/>
        </div>
    );
}

export {PostsPage};
