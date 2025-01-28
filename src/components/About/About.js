import React from 'react'
import image from "../Styling/img/banner.jpeg"
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
                <h5 className='aboutTitle'>A propos de miKaza-renov</h5>
                <p className='aboutP'>Basée en région parisienne, notre entreprise est spécialisée dans le nettoyage, la neutralisation et la dépose de cuves à fioul. Nos experts interviennent dans toute la France. Car nous sommes conscients que votre cuve à fioul est un élément essentiel de votre système de chauffage, nous nous engageons à vous proposer des services de nettoyage, de neutralisation et de dépose de cuves à fioul de qualité irréprochable, dans le respect des normes en vigueur et de l'environnement. Que vous soyez un particulier propriétaire, des copropriétaires ou une entreprise, nous vous proposons des solutions personnalisées et adaptées à vos besoins spécifiques.</p>
            </div>
          </div>
       
          </div>

          <div className='row'>
   <div className='col-md-5 psmSc'>
    <DevisContact link={"https://www.youtube.com/embed/u971CsSDe1c?si=JWI1l7qL4_JtGNmR"}/>
   </div>
   <div className='col-md-7 flexColEnd'>
   <iframe
  width="100%" // Set width to 100% of the parent container
  height="100%" // Maintain aspect ratio
  src="https://www.youtube.com/embed/vDhscwi3ulI?si=Vahoz55R8XaHMTM_"
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
