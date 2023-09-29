import React from "react";
import {useDispatch} from "../hooks/useStore";
import {decrementLike, incrementLike} from "../store/actions/post";

const Likes = () => {
  const dispatch = useDispatch();

  return (
    <div style={{margin: "24px"}}>
      <button onClick={() => dispatch(incrementLike())}>Likes</button>
      <button onClick={() => dispatch(decrementLike())}> Dislikes</button>
    </div>
  );
};

export default Likes;
