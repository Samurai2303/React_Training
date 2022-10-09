import {Post} from "../Post/Post";

function Posts({posts}) {

    return (
        <div>
            {posts.length ? posts.map(value => <Post post={value} key={value.id}/>) : <div>Have no posts</div>}
        </div>
    );
}

export {Posts};
