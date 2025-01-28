import { useEffect,useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Header1 } from "./components/Header/Header1";
import { Header2 } from "./components/Header/Header2";
import { Header3 } from "./components/Header/Header3";
import { Homepage } from "./components/Homepage/Homepage";
import { Footer } from "./components/Footer/Footer";
import { Aid } from "./components/Aid/Aid";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { DevisPage } from "./components/Devis/DevisPage";
import { ServicesPage } from "./components/Services/ServicesPage";
import { About } from "./components/About/About";
import { ContactPage } from "./components/Contact/ContactPage";
import { Galerie } from "./components/Galerie/Galerie";
import { Privacy } from "./components/Privacy/Privacy";
import CookieConsent from "./components/CookiesConsent/CookiesConsent";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";
import { Payment } from "./components/Payment/Payment";
import PaymentSuccess from "./components/Payment/PaymentSuccess";
import { ProductPage } from "./components/Products/ProductPage";
import { OneProductPage } from "./components/Products/OneProductPage";


function App() {

  return (
<BrowserRouter>
<CookieConsent/>
<Header1 />
<Header2 />
{/* <Header3 /> */}
<Routes>
    <Route  path="/"   element={<Homepage />}   />
    <Route  path="/Aide"   element={<Aid />}   />
    <Route  path="/About"   element={<About />}   />
    <Route  path="/Login"   element={<LoginPage />}   />
    <Route  path="/Register"   element={<RegisterPage />}   />
    <Route  path="/Devis"   element={<DevisPage />}   />
    <Route  path="/NOS_SERVICES"   element={<ServicesPage />}   />
    <Route  path="/Contact"   element={<ContactPage />}   />
    {/* <Route  path="/"   element={<Galerie />}   /> */}
    <Route  path="/Privacy"   element={<Privacy />}   />
    <Route  path="/payment"   element={<Payment />}   />
    <Route  path="/Nos Produits"   element={<ProductPage />}   />
    <Route  path="/This Product"   element={<OneProductPage />}   />
    <Route  path="/Payment_success"   element={<PaymentSuccess />}   />


</Routes>
  <Footer/>

  </BrowserRouter>
  )
}

export default App;


