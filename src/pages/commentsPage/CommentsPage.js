import {CommentFromApi, Comments, SelectedComment} from "../../components";
import css from './commentsPage.module.css';

function CommentsPage() {



    return (
        <div className={css.wrap}>
            <Comments/>
            <SelectedComment/>
            <CommentFromApi/>
        </div>
    );
}

export {CommentsPage};
