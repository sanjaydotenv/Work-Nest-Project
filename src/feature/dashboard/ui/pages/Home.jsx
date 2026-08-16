import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../../shared/state/themeSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      this is home page
      <button onClick={() => dispatch(toggleTheme())}>Theme chnage</button>
    </div>
  );
};

export default Home;
