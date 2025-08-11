import { useEffect,useState } from "react";
import { Route,Routes } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../actions/authUser'
import { Header1 } from "./Header/Header1";
import { Header2 } from "./Header/Header2";
import { Waiting } from '../Waiting/Waiting'
import { Homepage } from "./Homepage/Homepage";
import { Footer } from "./Footer/Footer";
import { Aid } from "./Aid/Aid";
import { LoginPage } from "./LoginPage/LoginPage";
import { DevisPage } from "./Devis/DevisPage";

import { About } from "./About/About";
import { ContactPage } from "./Contact/ContactPage";

import CookieConsent from "./CookiesConsent/CookiesConsent";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { Payment } from "./Payment/Payment";
import PaymentSuccess from "./Payment/PaymentSuccess";
import { ProductPage } from "./Products/ProductPage";
import { getItems } from "../../actions/cartActions";
import { OneProductPageWrapper } from "./Products/OneProductPageWrapper";
import { Cart } from "./Cart/Cart";
import { PrivateSpace } from "./PrivateSpace/PrivateSpace";
import { LoginCodePage } from "./LoginPage/LoginCodePage";
import { ProfilePage } from "./PrivateSpace/Profile/ProfilePage";
import { DevisPageWrapper } from "./Devis/DevisPageWrapper";
import { AddProduct } from "./PrivateSpace/AddProduct/AddProduct";



export const PublicRoutes = ({ip_address}) => {

  const dispatch=useDispatch()
  const user=useSelector(state=>state.user)
  useEffect(()=>{
      dispatch(loadUser(user.token))
  
        dispatch(getItems(user.token))
    
  },[user.isLoading])

  if(user.isLoading){
    return <Waiting />
  }

  return (
<>
{/* <CookieConsent/> */}
<Header1  authenticated={user.isAuthenticated}/>
<Header2 authenticated={user.isAuthenticated} ip_address={ip_address}/>
{/* <Header3 /> */}
<div style={{marginTop:120}}></div>
<Routes>
    <Route  path="/"   element={<Homepage />}   />
    <Route  path="/Aide"   element={<Aid />}   />
    <Route  path="/Cart"   element={<Cart ip_address={ip_address}/>}   />
    <Route  path="/About"   element={<About />}   />
    <Route  path="/Login"   element={<LoginPage ip_address={ip_address}/>}   />
    <Route  path="/Login_code"   element={<LoginCodePage ip_address={ip_address}/>}   />
    <Route  path="/Register"   element={<RegisterPage ip_address={ip_address}/>}   />
    <Route  path="/Devis"   element={<DevisPage ip_address={ip_address}/>}   />
    <Route  path="/Devis/:product"   element={<DevisPageWrapper   ip_address={ip_address}/>} />

    <Route  path="/Contact"   element={<ContactPage ip_address={ip_address}/>}   />

    <Route  path="/payment"   element={<Payment />}   />
    <Route  path="/Nos_Produits"   element={<ProductPage ip_address={ip_address}/>}   />
    <Route  path="/This Product/:id"   element={<OneProductPageWrapper ip_address={ip_address}/>}   />
    <Route  path="/Payment_success"   element={<PaymentSuccess />}   />
    {user.isAuthenticated && <Route path="/My_Space" element={<PrivateSpace/>}>

    <Route path='Profile' element={<ProfilePage ip_address={ip_address}/>}/>
    {/* {user.isAdmin&&  */}
    <Route path='Add_Product' element={<AddProduct />}/>
    
   

  </Route>}


</Routes>
  <Footer/>

  </>
  )
}



