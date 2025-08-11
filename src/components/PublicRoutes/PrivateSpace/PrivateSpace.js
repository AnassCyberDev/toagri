import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar/SideBar'
import './PrivateSpace.css'

export const PrivateSpace = () => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div style={{minHeight:"40Vh"}}> 
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar}/>
      <div className={` ${
        isCollapsed ? "hideItemNames" : "showItemNames"
      } p-4`}>
        <Outlet  /> 
      </div>


    </div>
  )
}
