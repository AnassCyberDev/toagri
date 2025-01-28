import React from 'react'
import brandLogo1 from "../Styling/img/loginLogo1.svg"
import brandLogo2 from "../Styling/img/loginLogo2.svg"

import { LoginBox } from './LoginBox'
import "./Login.css"

export const LoginPage = () => {
  return (
    <section id='loginPage'>
        <div className='container'>
        <div className="primary-overlay loginFlexStart">
          <LoginBox brandLogo1={brandLogo1} brandLogo2={brandLogo2}/>
          </div>
        </div>
        
    </section>
  )
}
