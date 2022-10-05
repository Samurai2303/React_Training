import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postsService} from "../../../services";
import {actions} from "../../../configs";
import {Post} from "../Post/Post";

function Posts() {
    let dispatch = useDispatch();
    let posts = useSelector((state)=>state.postsReducer.posts);

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: actions.loadPosts, payload: data}));
    }, []);

  return (
      <div>
          {posts.length?posts.map(value => <Post post={value} key={value.id}/>):<div>Loading...</div>}
      </div>
  );
}

export {Posts};
