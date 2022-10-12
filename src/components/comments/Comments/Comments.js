import {useDispatch, useSelector} from "react-redux";
import {Comment} from "../Comment/Comment";
import {useEffect} from "react";
import {commentsActions} from "../../../redux";

function Comments() {

    let dispatch = useDispatch();
    let {comments, commentsLoading, commentsError} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(commentsActions.getAll());
    }, []);

    return (
        <div>
            {commentsLoading && <div>Loading comments...</div>}
            {commentsError && <div>Error(</div>}
            {commentsLoading ? false : commentsError ? false : comments.length ?
                comments.map((value, index) => <Comment comment={value} key={index}/>) : <div>Have no comments</div>}
        </div>
    );
}

export {Comments};
