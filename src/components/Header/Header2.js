import React, { useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import logo1 from '../Styling/img/logo1.svg'
import { IconContext } from 'react-icons'
import {FaRegCircleUser} from 'react-icons/fa6'
import { IoMenu } from "react-icons/io5";
import logoGroupe1 from '../Styling/img/logo2/Logo2.svg'
import logoGroupe2 from '../Styling/img/logo2/miKaza-renov.svg'
import logoGroupe3 from '../Styling/img/logo2/3def.svg'
import { Header3 } from './Header3'




export const Header2 = () => {
  const location=useLocation()
  const [isopen,setIsopen]=useState(false)
  const isActive = (path) => location.pathname === path;

  const handleClickInside = (e) => {
    e.stopPropagation();
  };
  const toggleMenu=()=>{
     setIsopen(prevState=>!prevState)
  }

  const logo2=()=>{

    return <div className='logo2'><div className='flexColCenter'>
              <img src={"https://validthemes.net/site-template/agrica/assets/img/logo-icon.png"}/>
              {/* <img src={logoGroupe2}/>
              <img src={logoGroupe3}/> */}
          </div></div>
  }
  return (
    <>
    <nav id='top' className="navbar navbar-expand-lg bg-light fixed-top-2" >
    <div className="container">
      <div className='logo1'>
      <a className="navbar-brand" href="/">
        <img src={"https://validthemes.net/site-template/agrica/assets/img/logo-mix.png"} width={150}/>
      </a>
      </div>
      <div className='flexRowBetween2'>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
      <IoMenu />
      </button>
      {logo2()}
<div className='logo2'>
<Link to={"/Login"} className='flexRowCenter m-2' style={{textDecoration:"none",color:'black'}}>
                    <IconContext.Provider
                value={{ className: "icons2 ifSmall" }}
              >
                <div>
                  <FaRegCircleUser />
                </div>
              </IconContext.Provider>
                    {/* <div className='Xlarge'>Mon espace</div> */}
                    </Link>
                    </div>
      </div>

      <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent:"center"}}>
        <ul className="navbar-nav w90" style={{justifyContent:"space-around"}}>
          <li className="nav-item hovering">
            <Link to={'/'} className={isActive("/")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)} aria-current="page">ACCUEIL</Link>
          </li>
          <li className="nav-item hovering">
            <Link to={"/About"} className={isActive("/About")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)} >QUI SOMMES NOUS ?</Link>
          </li>
          <li className="nav-item hovering">
            <Link to={"/NOS_SERVICES"} className={isActive("/NOS_SERVICES")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)} >NOS SERVICES</Link>
          </li>
          <li className="nav-item hovering">
            <Link to={"/Devis"} className={isActive("/Devis")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)}>DEVIS</Link>
          </li>
          <li className="nav-item hovering">
            <Link to={"/Aide"} className={isActive("/Aide")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)}>AIDES DE L'ETAT</Link>
          </li>
          <li className="nav-item hovering logo2">
            <Link to={"/Localisation"} className={isActive("/Localisation")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)}>LOCALISATION</Link>
          </li>
          <li className="nav-item hovering">
            <Link to={'/Nos Produits'} className={isActive("/Nos Produits")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)}>NOS PRODUITS</Link>
          </li>
          <li className="nav-item hovering">
            <Link to={'/Contact'} className={isActive("/Contact")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)}>CONTACT</Link>
          </li>
          <li className="nav-item hovering logo2 mb-5">
            <Link to={"/Privacy"} className={isActive("/Privacy")?"nav2Link activeLink":"nav2Link"} onClick={() => window.scrollTo(0, 0)}>POLITIQUE DE CONFIDENTIALTE</Link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  <Header3 isopen={isopen}/>
  </>
  )
}
