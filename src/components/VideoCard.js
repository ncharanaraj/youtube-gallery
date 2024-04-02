import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  //   const {} = statistics;

  return (
    <div className="p-2 w-[420px]">
      <div className="w-full h-[247px] ">
        <img
          src={thumbnails.medium.url}
          alt="thumbnails"
          className="rounded-xl w-full h-full"
        />
      </div>
      <ul className="my-2">
        <li className="font-medium text-base overflow-ellipsis">{title}</li>
        <li className="font-normal text-sm leading-5 text-[#606060] py-1">
          {channelTitle}
        </li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
