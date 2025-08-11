import React from 'react'
import execution from "../Styling/img/execution.svg"
import security from "../Styling/img/security.svg"
import satisfaction from "../Styling/img/satisfaction.svg"
import intervention from "../Styling/img/intervention.svg"
import "./Divers.css" 


export const Divers = () => {
  return (
    <section id='divers'>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
            <div className='flexColCenter'>
                <img src={intervention} className='iconDivers'/>
                <div className='diversTitle'>
                Intervention rapide
                </div>
                <p className='diversP'>
                Nos équipes interviennent rapidement sur l'ensemble du territoire pour garantir une prise en charge immédiate de vos besoins.
                </p>
            </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
            <div className='flexColCenter'>
                <img src={security} className='iconDivers'/>
                <div className='diversTitle'>
                Sécurité
                </div>
                <p className='diversP'>
                Nous mettons un point d'honneur à respecter les normes de sécurité les plus strictes pour protéger votre environnement et vos biens.
                </p>
            </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
            <div className='flexColCenter'>
                <img src={execution} className='iconDivers'/>
                <div className='diversTitle'>
                Qualité d'exécution
                </div>
                <p className='diversP'>
                Notre expertise et notre rigueur assurent une qualité d'exécution irréprochable pour chacun de nos services.
                </p>
            </div>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 p-3'>
            <div className='flexColCenter'>
                <img src={satisfaction} className='iconDivers'/>
                <div className='diversTitle'>
                Satisfaction client
                </div>
                <p className='diversP'>
                Votre satisfaction est notre priorité absolue, nous nous engageons à fournir un service à la hauteur de vos attentes.
                </p>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}
