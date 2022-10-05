function Comment({comment}) {

    return (
        <div>
            <h3>Id - {comment.id}</h3>
            <p>Name - {comment.name} <br/>
                Body - {comment.body}</p>
        </div>
    );
}

export {Comment};
