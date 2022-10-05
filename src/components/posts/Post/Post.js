function Post({post}) {

    return (
        <div>
            <h3>Id - {post.id}</h3>
            <p>Title - {post.title} <br/>
                Body - {post.body}</p>
        </div>
    );
}

export {Post};
