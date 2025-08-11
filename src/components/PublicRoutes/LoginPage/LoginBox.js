import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import arrow from '../Styling/img/lened_arrow.svg'
import { Link ,useNavigate} from 'react-router-dom'
import { USER_LOADED } from '../../../actions/types'
import { getItems } from '../../../actions/cartActions'

export const LoginBox = ({ip_address}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [visibilité1, setVisibilité1] = useState('password')
  const [token, setToken] = useState("");


  // norma login

  const new_login=async(data)=>{
      const request=await fetch(`${ip_address}/login/`,{
        method:'POST',
        body: data,
       
    
     })
    const res=await request.json()
     switch(request.status){
        case 200:
          localStorage.setItem("token",res.token)
          dispatch(getItems(res.token))
          dispatch({
            type:USER_LOADED,
            payload:res
          })
          navigate('/')
          
     break
     default:
        alert('wrong credentials')
        break
     }
    
    }

// on submit 
const onSubmit=async (e)=>{
  e.preventDefault()
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  
  if(1){ 

  const formdata=new FormData()
  formdata.append("email",email)
  formdata.append("password",password)
  // formdata.append("grant_type",'password')
  // formdata.append("client_id",'v5uOuy0AFs80jOqAuprtL8cHu4LVp1inikA8eJHx')
  // formdata.append("client_secret","GhL2IHjfLVXFnYdS8BR1UBLa4FomC2AaIeNrYHCxlxYomnEr7JhUGdtFgOx0kjXcCAomF7cxudY7k6VJNgCWvIvsbj8A9PQXCgJr4fFAUJijHb8KWp59JkaJJYqyoB")
  new_login(formdata)
  // setTimeout(navigate('/timeline'),500)// a changer
}else{
  alert(("check captcha")
       )
}
  
 
}


  return (
    <div className="flexColBetween loginBox">
      <div className="card p-4 text-center" style={{width:"70%",height:"100%",backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', borderRadius: '15px' }}>
        <div className="text-center">
        <div className='flexColCenter'>
              <img src={"https://validthemes.net/site-template/agrica/assets/img/logo-light.png"} width={"50%"}/>
            
          </div>
          <h3 className='loginTitle'>MON ESPACE</h3>
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
          <p className='loginPrompt'>Avez vous reçu un code ? <Link to={'/Login_code'} style={{textDecoration:"none",color:"#E75D0E"}}>Utiliser<img src={arrow} className='leaned_arrow'/></Link></p>
        </div>
      </div>
    </div>
  )
}
