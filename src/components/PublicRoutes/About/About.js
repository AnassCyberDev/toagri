import React from 'react'
import image from "../Styling/img/cattle_farmer.webp"
import './About.css'
import { Title } from '../Title/Title'
import { DevisContact } from '../Devis/DevisContact'

export const About = () => {
  return (
    <section id='about'>
          <div className='container smSc'>

            <Title text={"QUI SOMMES NOUS"}/> 
          <div className='row'>
          <div className='col-lg-4 order-lg-2 d-flex justify-content-center'>
            <img src={image} className='aboutImage'/>
          </div>
          <div className='col-lg-8 order-lg-1 flexColCenter'>
            <div className='titlePara mt-4 mb-3'>
                <h5 className='aboutTitle'>A propos de TOAGRI</h5>
                <p className='aboutP'>Basée en région de Berrechid, notre entreprise est spécialisée dans l’élevage et le bien-être animal. Nos experts interviennent dans tout le maroc pour vous accompagner dans la gestion et l’optimisation de votre exploitation. Conscients que la santé et le confort de vos animaux sont essentiels à la réussite de votre activité, nous vous proposons des solutions adaptées, respectueuses des normes en vigueur et de l’environnement. Que vous soyez un éleveur indépendant, une coopérative ou une entreprise agricole, nous mettons à votre disposition notre expertise pour assurer la performance et la pérennité de votre élevage.</p>
            </div>
          </div>
       
          </div>

          <div className='row'>
   <div className='col-md-5 psmSc'>
    <DevisContact link={"https://www.youtube.com/embed/CG4Y1r3fuic?si=NTk7X8Hr65txz5RO"}/>
   </div>
   <div className='col-md-7 flexColEnd'>
   <iframe
  width="100%" // Set width to 100% of the parent container
  height="100%" // Maintain aspect ratio
  src="https://www.youtube.com/embed/CG4Y1r3fuic?si=NTk7X8Hr65txz5RO"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
  style={{
    marginTop:30,
    borderRadius: 10,
    aspectRatio: "16/9", // Maintain 16:9 aspect ratio
    maxWidth: '100%', // Prevent the iframe from exceeding the screen size
    height: '80%' // Ensure the height scales with width
  }}
></iframe>
   </div>
       
          </div>

          </div>
    </section>
  )
}
