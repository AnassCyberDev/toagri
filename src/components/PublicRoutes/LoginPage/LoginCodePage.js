import React from 'react'


import { LoginCode } from './LoginCode'
import "./Login.css"

export const LoginCodePage = ({ip_address}) => {
  return (
    <section id='loginPage'>
        <div className='container'>
        <div className="primary-overlay loginFlexStart">
          <LoginCode ip_address={ip_address}/>
          </div>
        </div>
        
    </section>
  )
}