import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContiner from './CommentsContiner';
import LiveChat from './LiveChat';

const Watchpage = () => {
    const [searchParams] = useSearchParams();
    

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    }, [])
  return (
    <div className = "flex flex-col">
    <div className="px-5 flex">
      <div>
<iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
<div className="w-full h-[500px]" >
  <LiveChat />
</div>
</div>
<CommentsContiner/>
</div>
  )
};

export default Watchpage;


//get the live data
//update the ui (so that page doesnot freeze)


//Web sockets or API polling