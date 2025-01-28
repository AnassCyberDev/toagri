import React,{useState} from 'react'
import "./Footer.css"
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { IconContext } from 'react-icons';
import footerLogo from "../Styling/img/footerLogo.svg"
import vectorCopy from "../Styling/img/VectorCopy.svg"
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [email,setEmail]=useState('')

  const sendEmail=async(data)=>{
    const request=await fetch(`/app/api/newsletter/`,{
        method:"POST",
        body:data
    })

    const status=request.status

    switch(status){
        case 201:
            alert("object created successfully")
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

    sendEmail(formdata)

    
}


  return (
    <section id='footer'>
      <div className="belleImage">
        <img src="https://validthemes.net/site-template/agrica/assets/img/shape/7.png" className='tractor'/>
      </div>
    <div className='container-fluid'>
      <div className='row'>
      
        <div className='col-lg-3 col-md-12 order-2 order-md-1 text-center footerLogo'>
          <img src={"https://validthemes.net/site-template/agrica/assets/img/logo-light.png"} style={{width:'60%', marginTop:40,marginBottom:30}} alt="Footer Logo"/>
        </div>
  
        <div className='col-lg-2 col-md-4 order-3 order-md-2 flexColStart'>
          <div className='footerItem'> 
            <div className='footerTitle'>NAVIGATION</div>
          </div>
          <Link to={'/About'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}> Qui somme nous ?</Link>
          <Link to={'/NOS_SERVICES'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}> Nos Services</Link>
          <Link to={'/Devis'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}>Devis</Link>
          <Link to={'/Aide'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}>Aides de l'Etat</Link>
          <Link to={'/Contact'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}>Contact</Link>
          <Link to={'/Galerie'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}>Galerie</Link>
          <Link to={'/Privacy'} className='footerItem footerLinks' onClick={() => window.scrollTo(0, 0)}>Politique de confidentialité</Link>
        </div>
  
        <div className='col-lg-3 col-md-4 order-4 order-md-3 footerAlignement'>
          <div className='footerItem'>
            <div className='footerTitle'>COORDONNEES</div>
          </div>
          <div className='footerItem'>
            <div className='flexRowFooter m-2'>
              <IconContext.Provider value={{ className: "icon" }}>
                <div>
                  <FaRegEnvelope />
                </div>
              </IconContext.Provider>
              <div className='ms-2'>contact@mikaza-renov.fr</div>
            </div>
          </div>
          <div className='footerItem'>
            <div className='flexRowFooter m-2'>
              <IconContext.Provider value={{ className: "icons" }}>
                <div>
                  <MdOutlinePhone />
                </div>
              </IconContext.Provider>
              <div className='ms-2'>+33 (0)7 67 32 10 18</div>
            </div>
          </div>
          <div className='footerItem'>
            <div className='flexRowFooter m-2'>
              <IconContext.Provider value={{ className: "icons" }}>
                <div>
                  <GoLocation />
                </div>
              </IconContext.Provider>
              <div className='ms-2'>Interventions sur toute la France</div>
            </div>
          </div>
        </div>
  
        <div className='col-lg-3 col-md-4 order-1 order-md-4 footerAlignement'>
          <div className='footerItem'> 
            <div className='footerTitle' style={{borderBottomWidth:0}}>NEWSLETTER</div>
          </div>
          <div className='footerItem'>
            <p className='footerP'>Abonnez-vous à notre newsletter pour recevoir nos dernières mise à jour et nouvelles</p>
          </div>
          <div className='footerItem'>
            <form onSubmit={onSubmit}>
              <div className="input-group input-group-lg">
                <input type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(e)=>setEmail(e.target.value)} value={email} required style={{height:48,borderRadius: "5px 0px 0px 5px !important"}}/>
                <button type='submit' className="input-group-text small_arrow" id="inputGroup-sizing-lg" style={{backgroundColor:"white"}}>
                  <IconContext.Provider value={{ className: "newIcon", color: "#087DAF" }}>
                    <div><IoMdSend /></div>
                  </IconContext.Provider>
                </button>
              </div> 
            </form>
            <div className='flexRowArround socialLinks mt-3'>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <div><FaFacebookF /></div>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <div><FaTwitter /></div>
              </IconContext.Provider>
              <IconContext.Provider value={{ className: "socialIcons" }}>
                <div><FaInstagram /></div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
  
      <div className='row'>
        <div className='footerCopyright col'>
          miKaza-renov 2024 copyright<img src={vectorCopy} style={{marginLeft:10}} alt="Copyright"/>
        </div>
      </div>
    </div>
  </section>
  
  )
}
