import {useDispatch} from "react-redux";

import {commentsActions} from "../../../redux";

function Comment({comment}) {

    let dispatch = useDispatch();

    return (
        <div>
            <h3>Id - {comment.id}</h3>
            <p>Name - {comment.name}</p>
            <button onClick={() => {dispatch(commentsActions.select(comment.id))}}>Select comment</button>
            <button onClick={() => {dispatch(commentsActions.getById({id: comment.id}))}}>Get from Api</button>
            <button onClick={() => {dispatch(commentsActions.deleteComment(comment.id))}}>Delete comment</button>
        </div>
    );
}

export {Comment};
