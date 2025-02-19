import React, { useState } from 'react'
import { useEffect } from 'react';
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../Utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../Utils/helper';

const LiveChat = () => {
const [liveMessage, setLiveMessage] = useState(" ")

  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

useEffect(() => {
    const i = setInterval(() => {
        //API polling
      dispatch(addMessage({
        name : generateRandomName(),
        message : makeRandomMessage(20),
      }))

    }, 1500);

    return () => clearInterval(i);

}, []);

  return (
    <>
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
    
    <div>
    {
    ChatMessages.map((c, i) => (<ChatMessage key = {i}
      name = {c.name}
      message = {c.message} />
    ))}
    </div>
    
    </div>
    <form className="w-full p-2 ml-2 border border-black" onSubmit={(e) =>{
      e.preventDefault();
      dispatch(addMessage({

        name : "Nidhishree Rao",
        message : liveMessage,
      }

      ))
      setLiveMessage("");

    }}>
      <input className="w-80" type="text" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
      <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
    
  );
};

export default LiveChat