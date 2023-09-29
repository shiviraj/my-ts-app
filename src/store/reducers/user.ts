import {TRootActions} from "../../typing/store";

export const UserAction = {
  SET_USER_NAME: "SET_USER_NAME",
  SET_USER_AGE: "SET_USER_AGE"
} as const;

export type UserState = { age: number, name: string };
export const initUser: UserState = {age: 18, name: ""};
export const userReducer = (state: UserState, action: TRootActions): UserState => {
  switch (action.type) {
    case UserAction.SET_USER_AGE:
      return {...state, age: action.payload.age};
    case UserAction.SET_USER_NAME:
      return {...state, name: action.payload.name};
    default:
      return state;
  }
};
