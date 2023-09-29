import React from "react";
import Likes from "./components/Likes";
import Post from "./components/Post";
import DisplayPost from "./components/DisplayPost";
import StoreProvider from "./store/configureStore";
import User from "./components/User";

const App: () => React.JSX.Element = () => {
  return (
    <StoreProvider>
      <div style={{margin: "24px"}}>
        <Likes/>
        <Post/>
        <User/>
        <DisplayPost/>
      </div>
    </StoreProvider>
  );
};

export default App;
