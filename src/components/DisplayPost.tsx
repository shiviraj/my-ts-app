import React from "react";
import {useSelector} from "../hooks/useStore";

const DisplayPost = () => {
  const {user, post} = useSelector((state)=>state);

  return (
    <div>

      <ul style={{margin: "24px"}}>
        <li>PostName: {post.name}</li>
        <li>Likes: {post.likes}</li>
      </ul>
      <ul style={{margin: "24px"}}>
        <li>User Name: {user.name}</li>
        <li>User Age: {user.age}</li>
      </ul>
    </div>
  );
};

export default DisplayPost;
