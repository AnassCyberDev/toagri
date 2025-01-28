import React, { useState, useEffect } from 'react';
import './CookieConsent.css'; // Add your styles here
import arrow from './arrow.svg'

const CookieConsent = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Check if the user has already made a choice
    localStorage.setItem('cookieConsent', 'rejected');
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowOverlay(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowOverlay(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowOverlay(false);
  };

  return (
    showOverlay && (
      <div className="cookie-overlay">
        <div className="cookie-card">
          <div className='row'>
          <div className='sans'   onClick={handleAccept}>
         Continuer sans accepter<span ><img width={12} src={arrow}/></span>
         </div>
          </div>
         <div className='row'>
         <div className='cookieTitle'>
         Protection de vie privée et données personelles
         </div>
         </div>
         <div className='row'>
         <div className='cookieP'>
         Ce site utilise des cookies pour améliorer votre expérience de navigation et analyser le trafic du site. Certains cookies sont essentiels pour le fonctionnement du site, tandis que d'autres nous aident à personnaliser le contenu et les publicités en fonction de vos intérêts.
         </div>
         </div>
         <div className='row'>
         <div className='col-sm-6 cookieChoice'>
         <div className="flexRowBetween">
            <button onClick={()=>alert("not set yet")} className="accept-btn">Seulement les cookies nécessaires
            </button>
            <button onClick={handleReject} className="reject-btn">Accepter tout</button>
          </div>
         </div>
         <div className='col-sm-6 flexColCenter'>
         <div className='without'   onClick={handleAccept}>
         Continuer sans accepter <span style={{marginRight:30}}><img src={arrow}/></span>
         </div>
         </div>
         </div>
        
        </div>
      </div>
    )
  );
};

export default CookieConsent;
