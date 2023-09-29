import {useContext} from "react";
import {GlobalContext} from "../store/configureStore";
import {TRootState} from "../typing/store";

export const useSelector = <T>(cb: (state: TRootState) => T): T => {
  const {state} = useContext(GlobalContext);
  return cb(state);
};
export const useDispatch = () => {
  const {dispatch} = useContext(GlobalContext);
  return dispatch;
};

