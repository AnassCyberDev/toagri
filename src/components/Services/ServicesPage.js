import React from 'react'
import { Services } from './Services'
import { Divers } from '../Divers/Divers'
import "./Service.css"


export const ServicesPage = () => {
  return (
    <>
   
    <Services/>
    <div className='flexColCenter mb-3'>
    <iframe
  width="60%" // Set width to 100% of the parent container
  height="auto" // Maintain aspect ratio
  src="https://www.youtube.com/embed/vDhscwi3ulI?si=Vahoz55R8XaHMTM_" 
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  style={{
    marginBottom:30,
    borderRadius: 10,
    aspectRatio: "16/9", // Maintain 16:9 aspect ratio
    maxWidth: '100%', // Prevent the iframe from exceeding the screen size
    height: 'auto' // Ensure the height scales with width
  }}
></iframe>

  </div>
  <Divers/>
    </>
  )
}
