import React,{useState,useEffect} from 'react'
import './Homepage.css'
import { Services } from '../Services/Services'
import { Faq } from '../Faq/Faq'
import { Devis } from '../Devis/Devis'
import { Divers } from '../Divers/Divers'
import { About } from '../About/About'
import { Link } from 'react-router-dom'
import CookieConsent from '../CookiesConsent/CookiesConsent'
import Carousel from '../Carousel/Carousel'
import video from "../Styling/img/bovin/background_video.mp4"

export const Homepage = () => {

  return (
    <>
    {/* <CookieConsent/> */}
    {/* <section id="showcase" className="py-5">
    <div className="primary-overlay">
        <div className="container" style={{height:"100%"}}> */}
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

            <div className="row"  style={{height:"100%"}}>
                <div className="col-lg-6 text-white flexColCenter" style={{height:"100%" }}>
                    <div className="centerlize">
                    <h4 className="bannerText">
                    Animal breeding products include high-quality livestock, milk, eggs, meat, and wool production.
                    </h4>
                    <div style={{width:"100%",marginTop:30}}>
                    <Link to={'/Contact'} className='filledButton'> Contactez-nous</Link>
                    </div>
                    </div>
                    
                   
                </div>
            </div> 

            </div>

        {/* </div>
    </div>
</section> */}
{/* <Services /> */}
<Carousel/>
{/* <Devis />
<Faq />
<Divers/> */}
</>
  )
}
