import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import logout_icon from '../Styling/img/icons_300/logout_icon.svg'
import user_300 from '../Styling/img/icons_300/account_icon.svg'
import { IconContext } from 'react-icons';
import { logoutUser } from '../../../actions/authUser';
import { useDispatch} from 'react-redux'
import "./Header.css"
import { Link,useNavigate } from 'react-router-dom';
// import location from '../Styling/img/icons_300/location_21_wght500.svg'
import cart from '../Styling/img/icons_300/cart.svg'


export const Header1 = ({ authenticated }) => {
  console.log(authenticated)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  return (
    <div id='header1' className='fixed-top-1'>
      <div className='row ms-2'>
        <div className='col-lg-8 flexRowCenter'>
          <div className='flexRowCenter me-3'>
            <IconContext.Provider
              value={{ className: "icons" }}
            >
              <div>
                <FaRegEnvelope />
              </div>
            </IconContext.Provider>
            <div className='header1Title'>contact@toagri.com</div>
          </div>
          <div className='flexRowCenter me-3'>
            <IconContext.Provider
              value={{ className: "icons" }}
            >
              <div>
                <MdOutlinePhone />
              </div>
            </IconContext.Provider>
            <div className='header1Title'>+212 (0)6  11 22 33 44</div>
          </div>
          {/* <div className='flexRowCenter me-3'>
                    <img src={location} className='icons'/>
                    <div className='header1Title'>Interventions sur toute la France</div>
                    </div> */}
        </div>
        <div className='col-lg-4  flexRowCenter'>
          <Link to={"/Cart"} className='flexRowCenter m-2' style={{ textDecoration: "none", color: 'black', backgroundColor: "white", borderRadius: "50%", padding: 5 }}>
            <img src={cart} width={24} />
          </Link>

          {authenticated ? <div className='d-flex flex-row' ><Link to={"/My_Space"} className='flexRowCenter m-2' >
            <img src={user_300} width={24} />
          </Link>  
           <Link className='m-2' onClick={() => {
                dispatch(logoutUser(localStorage.getItem("token")))
                navigate('/')
              }} type="submit">
                <img src={logout_icon} alt="" />
              </Link> </div> :
            
              <Link to={"/Login"} className='flexRowCenter m-2' >
                <img src={user_300} width={24} />
              </Link>
           

           
          }
        </div>
      </div>
    </div>
  )
}
