import {TRootActions} from "../../typing/store";

export type PostState = { name: string, likes: number };

export const PostAction = {
  SET_POST_NAME: "SET_POST_NAME",
  INCREASE_POST_LIKES: "INCREASE_POST_LIKES",
  DECREASE_POST_LIKES: "DECREASE_POST_LIKES"
} as const;

export const initPost: PostState = {likes: 0, name: ""};

export const postReducer = (state: PostState, action: TRootActions): PostState => {
  switch (action.type) {
    case PostAction.SET_POST_NAME:
      return {...state, name: action.payload.name};
    case PostAction.INCREASE_POST_LIKES:
      return {...state, likes: state.likes + 1};
    case PostAction.DECREASE_POST_LIKES:
      return {...state, likes: state.likes - 1};
    default:
      return state;
  }
};
