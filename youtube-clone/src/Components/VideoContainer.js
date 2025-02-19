import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard'; 
import { Link } from 'react-router-dom';
import {YOUTUBE_VIDEO_API} from '../Utils/constants';
// Correct importimport YOUTUBE_VIDEO_API from '../Utils/constants';

const VideoContainer = () => {
const [videos, setVideos] = useState([]);

useEffect(() =>{
  getVideos();
     }, []);
const getVideos = async() =>{
  const data = await fetch(YOUTUBE_VIDEO_API);
  const json = await data.json();
  setVideos(json.items);
}

  return (
    <div className="flex flex-wrap">
      {videos.map((videos) => 
      (<Link  key={videos.id} to={"/watch?v=" + videos.id}>
        <VideoCard info={videos} /> </Link>))}
      </div>
  )
}

export default VideoContainer;