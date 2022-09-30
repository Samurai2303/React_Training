import {useNavigate} from "react-router-dom";
import {urls} from "../../../configs";

function Post({post}) {
    let navigate = useNavigate();

    return (
        <div>
            <h3>Id - {post.id} <br/> User Id - {post.userId}</h3>
            <p>Title - {post.title} <br/>
                Body - {post.body}</p>
            <button onClick={() => navigate(urls.posts+'/'+ post.id + urls.comments)}>Show comments of this post</button>
            <button>Show user of this post</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export {Post};
