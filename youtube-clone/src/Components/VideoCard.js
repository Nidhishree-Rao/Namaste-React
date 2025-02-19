import React from 'react';

const VideoCard = ({ info }) => {
  console.log(info);
  
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-md w-64">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails?.medium?.url} />
      <ul>
        <li className="py-2 font-bold truncate w-60">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;