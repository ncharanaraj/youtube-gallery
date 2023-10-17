import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col mt-4 mx-16 w-full">
      <div className="flex">
        <div className="w-full">
          <iframe
            width="930"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?&autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="w-2/3">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
