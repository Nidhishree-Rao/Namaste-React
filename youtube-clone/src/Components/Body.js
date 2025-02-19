import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">
        <Sidebar /> 
        {/* Body has two children 
        1. sidebar and maincontainer,  
        2. acc. to route main container to rplaced as watchpage
        3. wee can do this dynamically using outlet.
        
        */}
        <Outlet />
    </div>
  )
}

export default Body