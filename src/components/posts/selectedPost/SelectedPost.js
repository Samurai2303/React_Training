import {useSelector} from "react-redux";

function SelectedPost() {

    let {selectedPost} = useSelector(state => state.postsReducer);

    return (
        <div>
            {selectedPost ? <div>
                <h3>Selected post <br/> Id - {selectedPost.id}</h3>
                <p>Title - {selectedPost.title} <br/>
                    Body - {selectedPost.body}</p>
            </div> : <div>No post selected</div>}
        </div>
    );
}

export {SelectedPost};
