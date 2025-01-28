import React from 'react'
import image from "../Styling/img/stateAid.jpeg"
import { Title } from '../Title/Title'
import { Link } from 'react-router-dom'
import './Aid.css'
export const Aid = () => {
  return (
    <section id='about'>
    <div className="container">
    <Title text={"AIDES DE l'ETAT"}/>
      <div className="row">
        {/* The image column will be first on small screens and larger */}
        <div className="col-md-5 order-md-2 d-flex justify-content-center">
          <img src={image}  style={{ borderRadius: 10 }} className="img-fluid imgSize" alt="Description" />
        </div>

        {/* The text column will be second on small screens and larger */}
        <div className="col-md-7 order-md-1">
          <div className='titlePara mt-4 mb-3'>
            <h5 className='aidSmallTitla'>A propos de miKaza-renov</h5>
            <p className='aidP'>
              Basée en région parisienne, notre entreprise est spécialisée dans le nettoyage, la neutralisation et la dépose de cuves à fioul. Nos experts interviennent dans toute la France. Car nous sommes conscients que votre cuve à fioul est un élément essentiel de votre système de chauffage, nous nous engageons à vous proposer des services de nettoyage, de neutralisation et de dépose de cuves à fioul de qualité irréprochable, dans le respect des normes en vigueur et de l'environnement. Que vous soyez un particulier propriétaire, des copropriétaires ou une entreprise, nous vous proposons des solutions personnalisées et adaptées à vos besoins spécifiques.
            </p>
            <h4  className='aidBigTitle'>COMMENT BENEFICIER DE CETTE AIDE ?</h4>
            <p className='aidP'>Pour bénéficier de cette aide, vous devez respecter certaines conditions, notamment :</p>
            <ul className='aidList'>
              <li className='text-start'>Être propriétaire occupant de votre logement</li>
              <li className='text-start'>Ne pas dépasser un certain plafond de ressources</li>
              <li className='text-start'>Faire réaliser les travaux par un professionnel certifié</li>
            </ul>
            <p className='aidP'>
              Nous vous recommandons de vous renseigner auprès des organismes compétents pour vérifier votre éligibilité à ces aides et bénéficier d'un soutien financier pour vos projets de nettoyage et de dépose de cuves à fioul.
            </p>
          </div>
        </div>
      </div>
      <div className='row' style={{marginTop:40}}>
      <div className='col text-center'> 
        <p className='bottomText' >
        N'hésitez pas à <span><Link to={'/Contact'} style={{color:'#E75D0E',textDecoration:"none"}}>nous contacter</Link></span> pour obtenir un devis gratuit ou pour toute information complémentaire. Nous sommes à votre disposition pour vous accompagner dans tous vos projets liés à votre cuve à fioul.
        </p>
      </div>
       </div>
    </div>
</section>
  )
}
