import { useState } from "react";
import { GoHome} from "react-icons/go"
import { FiFilter,FiSettings,FiUser,FiBox } from "react-icons/fi";
import { MdOutlineStorefront } from "react-icons/md";
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";


const Sidebar = ({isCollapsed,toggleSidebar}) => {


  return (
    <div
      className={`d-flex flex-column bg-light text-white p-3 vh-100 position-fixed w-15`}
      style={{ transition: "width 0.3s",marginTop:-100 }}
    >
      <button
        className="btn btn-outline-light mb-3 align-self-start"
        onClick={toggleSidebar}
        style={{paddingTop:60}}
      >
        {isCollapsed ? <MdOutlineArrowForwardIos color="#1f4e3d"/> 
        : 
        <div className="d-flex align-items-center ">
            <MdOutlineArrowBackIos color="#1f4e3d"/>
            <span className="ms-2" style={{color:"#1f4e3d"}}>Hide</span>
        </div>}
      </button>
      <ul className="nav flex-column">
        {[{ icon: GoHome, name: "Home",link:"/" },
          { icon: FiUser, name: "Profile",link:"/My_Space/Profile"  },
          { icon: FiBox, name: "Product",link:"/My_Space/Add_Product"  },
    
          { icon: MdOutlineStorefront, name: "Store",link:"/"  },
        
          { icon: FiSettings, name: "Settings" ,link:"/" }
        ].map((item, index) => (
           
        //   <li key={index} className="nav-item d-flex align-items-center mb-4">
        <li key={index} className={`nav-item  mb-4 ${isCollapsed ? 'text-center':'d-flex align-items-center'}`}>
             <Link className="sideBarItems" to={item.link} style={{textDecoration:"none",}}>
            <item.icon size={24} color="#1f4e3d"/>
            {!isCollapsed && <span className="ms-3" style={{color:"#1f4e3d"}}>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
