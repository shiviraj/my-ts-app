import {UserAction} from "../reducers/user";

export const setUserName = (name: string) => ({type: UserAction.SET_USER_NAME, payload: {name}});
export const setUserAge = (age: number) => ({type: UserAction.SET_USER_AGE, payload: {age}});
