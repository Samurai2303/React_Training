import {useDispatch, useSelector} from "react-redux";
import {postsActions} from "../../../redux";

function SelectedPost() {

    let dispatch = useDispatch();
    let {selectedPost} = useSelector(state => state.postsReducer);

    return (
        <div>
            <div>
                {selectedPost && <div>
                    <h3>Id - {selectedPost.id} <br/> User id - {selectedPost.userId} </h3>
                    <p>Title - {selectedPost.title} <br/>
                        Body - {selectedPost.body}</p>
                    <div onClick={() => dispatch(postsActions.selectPost(null))}>Close</div>
                </div>}
            </div>
        </div>
    );
}

export {SelectedPost};
