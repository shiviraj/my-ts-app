import React from "react";
import {useDispatch, useSelector} from "../hooks/useStore";
import {setPostName} from "../store/actions/post";

const Post: () => React.JSX.Element = () => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <div style={{margin: "24px"}}>
      <input type="text" value={post.name}
             onChange={(e) => dispatch(setPostName(e.target.value))}
             placeholder="Post name"/>
    </div>
  );
};

export default Post;
