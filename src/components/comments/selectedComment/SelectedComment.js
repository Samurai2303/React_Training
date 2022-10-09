import {useSelector} from "react-redux";

function SelectedComment() {

    let {selectedComment} = useSelector(state => state.commentsReducer);

    return (
        <div>
            {selectedComment ? <div>
                <h3>Selected comment <br/> Id - {selectedComment.id}</h3>
                <p>Name - {selectedComment.name} <br/>
                    Email - {selectedComment.email} <br/>
                    Body - {selectedComment.body}</p>
            </div> : <div>No comment selected</div>}
        </div>
    );
}

export {SelectedComment};
