import React from 'react'
import { useParams } from 'react-router-dom'
import { OneProductPage } from './OneProductPage'


export const OneProductPageWrapper = ({ip_address}) => {
    const {id}=useParams()
  return (
    <OneProductPage ip_address={ip_address} id={id}/>
  )
}
