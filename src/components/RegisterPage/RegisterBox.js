import React from 'react'
import arrow from '../Styling/img/lened_arrow.svg'
import { Link } from 'react-router-dom'

export const RegisterBox = ({brandLogo1,brandLogo2}) => {
  return (
    <div className="flexColBetween loginBox">
      <div className="card p-4 text-center" style={{width:"80%",height:"100%",backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', borderRadius: '15px' }}>
        <div className="text-center">
        <div className='flexColCenter'>
              <img src={brandLogo1}/>
              <img src={brandLogo2}/>
          </div>
          <h2 className='loginTitle'>M'enregistrer</h2>
        </div>
        <form> 
        <div className="mb-3">
        
        <input type="text" className="form-control inputCredentials" id="nom" placeholder="Nom" />
      </div>
      <div className="mb-3">
        
            <input type="text" className="form-control inputCredentials" id="prénom" placeholder="Prénom" />
          </div>
          <div className="mb-3">
        
            <input type="email" className="form-control inputCredentials" id="email" placeholder="Email" />
          </div>
          <div className="mb-3">
           
            <input type="password" className="form-control inputCredentials" id="password" placeholder="Mot de passe" />
          </div>
          <div className="mb-1">
           
            <input type="password" className="form-control inputCredentials" id="conf_password" placeholder="Confirmer Mot de passe" />
          </div>
          {/* <div className='flexRowBetween'> */}
          {/* <div class="form-check flexRowStart">
  <input class="form-check-input check-box" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label check-box-typo" for="flexCheckDefault">
  Remember me
  </label>
</div> */}
{/* <div className='check-box-typo' style={{cursor:"pointer"}} onClick={()=>alert('Not set yet')}>Mot de passe  oublié ?</div> */}
          {/* </div> */}
          <div className='text-center marTop'>
          <button type="submit" className="filledButton">Soumettre</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className='loginPrompt'>Déjà inscrit ? <Link to={"/Login"} style={{textDecoration:"none",color:"#E75D0E"}}>Se connecter<img src={arrow} className='leaned_arrow'/></Link></p>
        </div>
      </div>
    </div>
  )
}
