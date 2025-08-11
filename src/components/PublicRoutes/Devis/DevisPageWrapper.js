import React from 'react'
import { useParams } from 'react-router-dom'
import { DevisPage } from './DevisPage'


export const DevisPageWrapper = ({ip_address}) => {
    const {product}=useParams()
  return (
    <DevisPage ip_address={ip_address} product={product}/>
  )
}


