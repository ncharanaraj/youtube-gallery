import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  console.log(isMenuOpen);
  return (
    <div className={`${isMenuOpen ? "ml-64 w-full" : "ml-0 w-full"}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
