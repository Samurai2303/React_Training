function Comment({comment}) {

    return (
        <div>
            <h3>Post id - {comment.postId} <br/> Id - {comment.id}</h3>
            <p>Name - {comment.name} <br/>
                Email - {comment.name} <br/>
                Body - {comment.body}</p>
        </div>
    );
}

export {Comment};
