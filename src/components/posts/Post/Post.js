import {useNavigate} from 'react-router-dom';

function Post({post}) {
    let navigate = useNavigate();

  return (
      <div>
          <h3>Id - {post.id}</h3>
          <p>Title - {post.title} </p>
          <button onClick={()=>navigate(`${post.id}`, {state:{...post}})}>Post details</button>
      </div>
  );
}

export {Post};
