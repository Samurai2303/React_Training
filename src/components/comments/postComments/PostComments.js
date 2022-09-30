import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../../services";
import {Comment} from "../Comment/Comment";

function PostComments() {
    let {id} = useParams();

    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getCommentsOfPost(id).then(({data}) => setComments(data));
    }, [id]);

    return (
        <div>
            {comments.length ? comments.map((value, index) => <Comment comment={value} key={index}/>):<div>Loading...</div>}
        </div>
    );
}

export {PostComments};
