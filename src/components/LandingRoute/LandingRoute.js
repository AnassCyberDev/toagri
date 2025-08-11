import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../actions/authUser'
import { PrivateRoutes } from '../PrivateRoutes/PrivateRoutes'
import { PublicRoutes } from '../PublicRoutes/PublicRoutes'
import { Waiting } from '../Waiting/Waiting'

export const LandingRoute = ({ip_address}) => {
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user)
    useEffect(()=>{
        dispatch(loadUser(user.token))
    },[user.isLoading])
  return (
<>
{user.isLoading ?<Waiting />:(user.isAuthenticated ?<PrivateRoutes ip_address={ip_address}/> : <PublicRoutes ip_address={ip_address}/>)}
{/* <PublicRoutes ip_address={ip_address}/> */}
</>
  )
}
