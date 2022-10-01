import {useEffect, useState} from "react";
import {commentsService} from "../../../services";
import {Comment} from "../Comment/Comment";

function Comments() {
    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data));
    }, []);


    return (
        <div>
            {comments.length ? comments.map((value, index) => <Comment comment={value} key={index}/>):<div>Loading...</div>}

        </div>
    );
}

export {Comments};
