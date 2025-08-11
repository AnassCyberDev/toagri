import React from 'react'
import { Devis } from './Devis'


export const DevisPage = ({ip_address,product}) => {
  return (
    <>
    <Devis ip_address={ip_address} product={product}/>

    </>
  )
}
