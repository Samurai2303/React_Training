import {useDispatch} from "react-redux";
import {commentsActions} from "../../../redux";

function Comment({comment}) {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>ID - {comment.id} <br/> Post ID - {comment.postId}</h3>
            <p>Name - {comment.name}</p>
            <button onClick={() => dispatch(commentsActions.selectComment(comment.id))}>Show details</button>
            <button onClick={() => {}}>Edit comment</button>
            <button onClick={() => {}}>Delete comment</button>
        </div>
    );
}

export {Comment};
