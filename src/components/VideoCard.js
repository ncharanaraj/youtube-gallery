import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, title, thumbnails } = snippet;

  //   const {} = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        src={thumbnails.medium.url}
        alt="thumbnails"
        className="rounded-lg"
      />
      <ul>
        <li>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
