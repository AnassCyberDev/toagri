import React, { useState, useEffect } from 'react';
import arrow from '../Styling/img/lened_arrow.svg';
// import { Link } from 'react-router-dom';
import { Link ,useNavigate} from 'react-router-dom'
import { USER_LOADED } from '../../../actions/types'
import { useDispatch } from 'react-redux';

export const RegisterBox = ({ ip_address }) => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  // State variables for form inputs
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  // Effect to validate form inputs
  useEffect(() => {
    if (nom && prenom && email && password && confPassword && password === confPassword) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nom, prenom, email, password, confPassword]);

   // norma login
  
    const new_register=async(data)=>{
        const request=await fetch(`${ip_address}/register/`,{
          method:'POST',
          body: data,
         
      
       })
      const res=await request.json()
       switch(request.status){
          case 201:
            localStorage.setItem("token",res.token)
            dispatch({
              type:USER_LOADED,
              payload:res
            })
            navigate('/')
            console.log(res)
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
    formdata.append("firsname",nom)
    formdata.append("lastname",prenom)
    formdata.append("email",email)
    formdata.append("password",password)
    formdata.append("username",`${nom}_${prenom}`)

    // formdata.append("grant_type",'password')
    // formdata.append("client_id",'v5uOuy0AFs80jOqAuprtL8cHu4LVp1inikA8eJHx')
    // formdata.append("client_secret","GhL2IHjfLVXFnYdS8BR1UBLa4FomC2AaIeNrYHCxlxYomnEr7JhUGdtFgOx0kjXcCAomF7cxudY7k6VJNgCWvIvsbj8A9PQXCgJr4fFAUJijHb8KWp59JkaJJYqyoB")
    new_register(formdata)
    // setTimeout(navigate('/timeline'),500)// a changer
  }else{
    alert(("check captcha")
         )
  }
    
   
  }
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // Perform registration logic here
      console.log('Form submitted:', { nom, prenom, email, password });
      alert('Registration successful!');
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <div className="flexColBetween loginBox">
      <div className="card p-4 text-center" style={{ width: "80%", height: "100%", backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#fff', borderRadius: '15px' }}>
        <div className="text-center">
          <div className='flexColCenter'>
            <img src={"https://validthemes.net/site-template/agrica/assets/img/logo-light.png"} width={"50%"} alt="Brand Logo" />
          </div>
          <h3 className='loginTitle'>M'enregistrer</h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control inputCredentials"
              id="nom"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control inputCredentials"
              id="prénom"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control inputCredentials"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control inputCredentials"
              id="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              className="form-control inputCredentials"
              id="conf_password"
              placeholder="Confirmer Mot de passe"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              required
            />
          </div>
          <div className='text-center marTop'>
            <button type="submit" className="filledButton" disabled={!formValid}>Soumettre</button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p className='loginPrompt'>Déjà inscrit ? <Link to={"/Login"} style={{ textDecoration: "none", color: "#E75D0E" }}>Se connecter<img src={arrow} className='leaned_arrow' alt="Arrow" /></Link></p>
        </div>
      </div>
    </div>
  );
};