import {createContext, PropsWithChildren, useMemo, useReducer} from "react";
import {rootReducer, rootState} from "./index";
import {TRootState} from "../typing/store";


export const GlobalContext = createContext<{ state: TRootState, dispatch: any }>({
  state: rootState,
  dispatch: () => ""
});




const StoreProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(rootReducer, rootState);

  const store = useMemo(() => ({state, dispatch}), [state]);

  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>;
};

export default StoreProvider;
