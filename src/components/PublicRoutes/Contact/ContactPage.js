import React from 'react'
import { Contact } from './Contact'
import { Faq } from '../Faq/Faq'
import { Divers } from '../Divers/Divers'


export const ContactPage = ({ip_address}) => {
  return (
    <>
     <Contact ip_address={ip_address}/>
    {/* <Faq/>
    <Divers/> */}
    </>
   


  )
}
