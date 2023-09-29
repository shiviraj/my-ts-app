import {PostAction} from "../reducers/post";

export const setPostName = (name: string) => ({type: PostAction.SET_POST_NAME, payload: {name}});
export const incrementLike = () => ({type: PostAction.INCREASE_POST_LIKES});
export const decrementLike = () => ({type: PostAction.DECREASE_POST_LIKES});
