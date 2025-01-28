
// Import Swiper React components and Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core Swiper styles
import "swiper/css/effect-coverflow"; // Import coverflow effect
import "swiper/css/pagination"; // Import pagination*
import { OneService } from "../Services/OneService";
import agneaux from '../Styling/img/bovin/agneaux.webp'
import betail from '../Styling/img/bovin/betail.webp'
import cheap from '../Styling/img/bovin/cheap.webp'
import cows from '../Styling/img/bovin/cows.webp'
import engrais from '../Styling/img/bovin/engrais.webp'
import moutons from '../Styling/img/bovin/moutons.webp'
import { Title } from "../Title/Title";

import { EffectCoverflow, Pagination } from "swiper/modules";
import './Carousel.css'

const Carousel = () => {
  return (
    <section className='container-fluid flexColCenter mb-3'>
           <Title text={"NOS SERVICES"}/>
           <div className='row text-center'>
            <div className='serviceSubtitle'>
            Découvrez nos services spécialisés dans le nettoyage et la dépose de cuves à fioul 
            </div>
           </div>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      
      slidesPerView={4}
      loop={true}
      speed={500}
      
      spaceBetween={-280} // Overlap effect by using negative space between slides
      coverflowEffect={{
        rotate: 0, // No rotation
        stretch: 0, // Stretch determines how far the slide should "stretch"
        depth: 400, // Depth for 3D effect
        modifier: 2, // Adjust to control slide size
        slideShadows: true, // Disable shadows for a cleaner look
      }}
      pagination={true} // Enable pagination if needed
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
         <OneService image={agneaux} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={betail} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={cheap} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={cows} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={engrais} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={moutons} text={"Nous assurons un nettoyage minutieux de vos cuves à fioul, éliminant tous les résidus et impuretés pour garantir une utilisation optimale. Notre équipe qualifiée utilise des techniques respectueuses de l'environnement pour un résultat impeccable."} title={"Nettoyage de cuves à fioul"}/>
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={im1} alt="Slide 5" />
      </SwiperSlide> */}
    </Swiper>
    </section>
  );
};

export default Carousel;

