import React from 'react'
import { OneService } from './OneService'
import { Title } from '../Title/Title'
import image1 from '../Styling/img/cardImage1alt.jpeg'
import image2 from '../Styling/img/cardImage2alt.jpg'
import image3 from '../Styling/img/cardImage3alt.jpg'
import './Service.css'

export const Services = () => {
  return (
    <section className='container-fluid flexColCenter'>
       <Title text={"NOS SERVICES"}/>
       <div className='row text-center'>
        <div className='serviceSubtitle'>
        Découvrez nos services spécialisés dans le nettoyage et la dépose de cuves à fioul 
        </div>
       </div>
    <div className='row cardContainer'>
        <div className='col-lg-4 col-md-6 flexColCenter'>
            <OneService image={image1} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
        </div>
        <div className='col-lg-4 col-md-6 flexColCenter'>
            <OneService  image={image2} text={"Nos experts prennent en charge la neutralisation de vos cuves hors d'usage, en toute sécurité et conformité avec les normes environnementales. Nous utilisons des procédés certifiés pour prévenir tout risque de contamination."} title={"Neutralisation de cuves hors d'usage"}/>
        </div>
        <div className='col-lg-4 col-md-6 flexColCenter'>
            <OneService  image={image3} text={"Nous effectuons la dépose sécurisée de vos cuves à fioul avec une précision et une rigueur exemplaires, minimisant les impacts sur votre propriété. Notre service inclut le transport et la gestion des déchets conformément aux réglementations en vigueur."} title={"Dépose sécurisée de cuves à fioul"}/>
        </div>
    </div>
    </section>
  )
}
