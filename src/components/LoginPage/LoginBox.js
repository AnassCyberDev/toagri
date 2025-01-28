import React, { useState } from 'react'
import arrow from '../Styling/img/lened_arrow.svg'
import { Link ,useNavigate} from 'react-router-dom'

export const LoginBox = ({brandLogo1,brandLogo2}) => {
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const sendLogin=async(data)=>{
    const request=await fetch(`/login/`,{
        method:"POST",
        body:data
    })

    const status=request.status

    switch(status){
        case 200:
            const response=await request.json()
            localStorage.setItem('token',response.token)
            navigate('/admin')
            break
        default:
            alert("somthing went wrong")
            break
    }
}


const onSubmit=async(e)=>{
    e.preventDefault()
    const formdata= new FormData()
    formdata.append('email',email)
    formdata.append('password',password)

    sendLogin(formdata)

    
}


  return (
    <div className="flexColBetween loginBox">
      <div className="card p-4 text-center" style={{width:"80%",height:"100%",backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', borderRadius: '15px' }}>
        <div className="text-center">
        <div className='flexColCenter'>
              <img src={brandLogo1}/>
              <img src={brandLogo2}/>
          </div>
          <h2 className='loginTitle'>MON ESPACE</h2>
        </div>
        <form onSubmit={onSubmit}> 
          <div className="mb-3">
        
            <input type="email" className="form-control inputCredentials" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>
          <div className="mb-1">
           
            <input type="password" className="form-control inputCredentials" id="password" placeholder="Mot de passe" onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </div>
          <div className='flexRowBetween'>
          <div class="form-check flexRowStart">
  <input class="form-check-input check-box" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label check-box-typo" for="flexCheckDefault">
  Remember me
  </label>
</div>
<div className='check-box-typo' style={{cursor:"pointer"}} onClick={()=>alert('Not set yet')}>Mot de passe  oublié ?</div>
          </div>
          <div className='text-center marTop'>
          <button type="submit" className="filledButton">Se connecter</button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className='loginPrompt'>Pas encore inscrit ? <Link to={'/Register'} style={{textDecoration:"none",color:"#E75D0E"}}>Créer un compte<img src={arrow} className='leaned_arrow'/></Link></p>
        </div>
      </div>
    </div>
  )
}
