import {Comment} from "../Comment/Comment";

function Comments({comments}) {

    return (
        <div>
            {comments.length ? comments.map(value => <Comment comment={value} key={value.id}/>) :
                <div>Have no comments</div>}
        </div>
    );
}

export {Comments};
