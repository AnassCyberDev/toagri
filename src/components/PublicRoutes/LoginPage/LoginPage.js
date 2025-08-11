import React from 'react'


import { LoginBox } from './LoginBox'
import "./Login.css"

export const LoginPage = ({ip_address}) => {
  return (
    <section id='loginPage'>
        <div className='container'>
        <div className="primary-overlay loginFlexStart">
          <LoginBox ip_address={ip_address}/>
          </div>
        </div>
        
    </section>
  )
}
