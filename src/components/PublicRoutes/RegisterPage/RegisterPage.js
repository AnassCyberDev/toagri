import React from 'react'
import brandLogo1 from "../Styling/img/loginLogo1.svg"
import brandLogo2 from "../Styling/img/loginLogo2.svg"
// import { LoginBox } from './LoginBox'
import { RegisterBox } from './RegisterBox'
// import "./Login.css"

export const RegisterPage = ({ip_address}) => {
  return (
    <section id='loginPage'>
        <div className='container'>
        <div className="primary-overlay loginFlexStart">
          <RegisterBox ip_address={ip_address}/>
          </div>
        </div>
        
    </section>
  )
}
