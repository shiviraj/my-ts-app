import * as userActions from "./actions/user";
import * as postActions from "./actions/post";
import {initPost, postReducer} from "./reducers/post";
import {initUser, userReducer} from "./reducers/user";
import {TRootActions, TRootReducer, TRootState} from "../typing/store";

const combineReducers = <S = TRootState>(reducers: { [K in keyof S]: TRootReducer<S[K]> }): TRootReducer<S> => {
  return (state: S, action: TRootActions): S => {
    return (Object.keys(reducers) as Array<keyof S>)
      .reduce(
        (prevState: S, key: keyof S) => ({...prevState, [key]: reducers[key](prevState[key], action)}),
        state
      );
  };
};

export const rootState = {
  post: initPost,
  user: initUser
};

export const rootActions = {
  post: postActions,
  user: userActions
};

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});


