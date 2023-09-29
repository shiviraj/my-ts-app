import React from "react";
import {useDispatch, useSelector} from "../hooks/useStore";
import {setUserAge, setUserName} from "../store/actions/user";

const User: () => React.JSX.Element = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div style={{margin: "24px"}}>
      <input type="text" placeholder="User name"
             value={user.name}
             onChange={(e) => dispatch(setUserName(e.target.value))}
      />
      <input type="number" placeholder="User age"
             value={user.age}
             onChange={(e) => dispatch(setUserAge(+e.target.value))}
      />
    </div>
  );
};

export default User;
