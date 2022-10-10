import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Comment} from "../Comment/Comment";
import {commentsActions} from "../../../redux";

function Comments() {

    let dispatch = useDispatch();

    let {comments, commentsError, commentsLoading} = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(commentsActions.getAll());
    }, []);

    return (
        <div>
            {commentsLoading && <div>Loading...</div>}
            {commentsError && <div>Error(</div>}
            {commentsLoading ? false : commentsError ? false : comments.length ?
                comments.map(value => <Comment comment={value} key={value.id}/>) :
                <div>Have no comments</div>}
        </div>
    );
}

export {Comments};
