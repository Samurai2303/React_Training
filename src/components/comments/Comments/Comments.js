import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {actions} from "../../../configs";
import {commentsService} from "../../../services";
import {Comment} from "../Comment/Comment";

function Comments() {
    let comments = useSelector((state) => state.commentsReducer.comments);
    let dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: actions.loadComments, payload: data}))
    }, []);

    return (
        <div>
            {comments.length ? comments.map(value => <Comment comment={value} key={value.id}/>) : <div>Loading...</div>}
        </div>
    );
}

export {Comments};
