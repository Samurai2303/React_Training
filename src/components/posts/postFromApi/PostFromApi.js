import {useSelector} from "react-redux";

function PostFromApi() {

    let {postFromApi, postFromApiLoading, postFromApiError} = useSelector(state => state.postsReducer);

    return (
        <div>
            {postFromApiLoading && <div>Loading...</div>}
            {postFromApiError && <div>Error(</div>}
            {postFromApiLoading ? false : postFromApiError ? false : postFromApi ? <div>
                <h3>Post from Api <br/> Id - {postFromApi.id}</h3>
                <p>Title - {postFromApi.title} <br/>
                    Body - {postFromApi.body}</p>
            </div> : <div>No post from Api</div>}
        </div>
    );
}

export {PostFromApi};
