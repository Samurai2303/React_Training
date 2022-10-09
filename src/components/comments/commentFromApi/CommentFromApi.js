import {useSelector} from "react-redux";

function CommentFromApi() {

    let {commentFromApi, commentFromApiError, commentFromApiLoading} = useSelector(state => state.commentsReducer);

    return (
        <div>
            {commentFromApiLoading && <div>Loading...</div>}
            {commentFromApiError && <div>Error(</div>}
            {commentFromApiLoading ? false : commentFromApiError ? false : commentFromApi ? <div>
                <h3>Comment from Api <br/> Id - {commentFromApi.id}</h3>
                <p>Name - {commentFromApi.name} <br/>
                    Email - {commentFromApi.email} <br/>
                    Body - {commentFromApi.body}</p>
            </div> : <div>No comment from Api</div>}
        </div>
    );
}

export {CommentFromApi};
