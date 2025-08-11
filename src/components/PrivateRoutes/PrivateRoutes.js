import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'



import { ProfilePage } from './Profile/ProfilePage'



export const PrivateRoutes = ({ip_address}) => {
  return (

    <div className="">

    
    <Routes>
    <Route path='/profile' element={<ProfilePage ip_address={ip_address}/>}/>

    {/* <Route path="*" element={<Navigate to="/"  />} /> */}
  </Routes>
  </div>
  )
}