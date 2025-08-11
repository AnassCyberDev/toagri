import React from 'react'
import image from "../Styling/img/financila_aid1.webp"
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
            <h5 className='aidSmallTitla'>A propos de TOAGRI</h5>
            <p className='aidP'>
            Basée en région de Berrechid, notre entreprise est spécialisée dans l’élevage et le bien-être animal. Nos experts interviennent dans tout le maroc pour vous accompagner dans la gestion et l’optimisation de votre exploitation. Conscients que la santé et le confort de vos animaux sont essentiels à la réussite de votre activité, nous vous proposons des solutions adaptées, respectueuses des normes en vigueur et de l’environnement. Que vous soyez un éleveur indépendant, une coopérative ou une entreprise agricole, nous mettons à votre disposition notre expertise pour assurer la performance et la pérennité de votre élevage.
            </p>
            <h4  className='aidBigTitle'>COMMENT BENEFICIER DE CETTE AIDE ?</h4>
            <p className='aidP'>Pour bénéficier de cette aide, vous devez respecter certaines conditions, notamment :</p>
            <ul className='aidList'>
              <li className='text-start'>Condition 1</li>
              <li className='text-start'>Condition 2</li>
              <li className='text-start'>Condition 3</li>
            </ul>
            <p className='aidP'>
              Nous vous recommandons de vous renseigner auprès des organismes compétents pour vérifier votre éligibilité à ces aides et bénéficier d'un soutien financier pour vos projets d'élévage et de produits relatifs.
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
