import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen){
    return null;
  }
  return (
    <div className="w-52 p-2 shadow-lg">
         <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>

      <h1 className="font-bold pt-4">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
    </div>
  )
}

export default Sidebar