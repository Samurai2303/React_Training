import {CommentFromApi, Comments, SelectedComment} from "../../components";
import css from './commentsPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {commentsActions} from "../../redux";
import {useEffect} from "react";

function CommentsPage() {

    let dispatch = useDispatch();

    let {comments, commentsError, commentsLoading} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(commentsActions.getAll());
    }, []);

    return (
        <div className={css.wrap}>
            {commentsLoading && <div>Loading...</div>}
            {commentsError && <div>Error(</div>}
            {commentsLoading ? false : commentsError ? false : <Comments comments={comments}/>}
            <SelectedComment/>
            <CommentFromApi/>
        </div>
    );
}

export {CommentsPage};
