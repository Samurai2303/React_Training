import {useDispatch, useSelector} from "react-redux";
import {commentsActions} from "../../../redux";

function SelectedComment() {

    let dispatch = useDispatch();
    let {selectedComment} = useSelector(state => state.commentsReducer);

    return (
        <div>
            <div>
                {selectedComment && <div>
                    <h3>ID - {selectedComment.id} <br/> Post ID - {selectedComment.postId}</h3>
                    <p>Name - {selectedComment.name} <br/>
                        Email -{selectedComment.email} <br/>
                        Body - {selectedComment.body}</p>
                    <div onClick={() => dispatch(commentsActions.selectComment(null))}>Close</div>
                </div>}
            </div>
        </div>
    );
}

export {SelectedComment};
