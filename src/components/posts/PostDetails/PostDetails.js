import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../../services";

function PostDetails() {
    let {state} = useLocation();
    let [post, setPost] = useState(state);
    let {id} = useParams();
    useEffect(() => {
        if (!state) {
            postsService.getById(id).then(({data}) => setPost(data));
        }else{
            setPost(state);
        }
    }, [id, state]);

  return (
      <div>
          <h3>Id - {post.id} <br/> User Id - {post.userId}</h3>
          <p>Title - {post.title} <br/>
          Body - {post.body}</p>

      </div>
  );
}

export {PostDetails};
