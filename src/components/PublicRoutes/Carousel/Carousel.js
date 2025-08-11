
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
         <OneService image={agneaux} text={"Some random text in here about breeding animals"} title={"Projets d'élévage à Berrechid"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={betail} text={"Some random text in here about breeding animals"} title={"Projets d'élévage à Berrechid"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={cheap} text={"Some random text in here about breeding animals"} title={"Projets d'élévage à Berrechid"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={cows} text={"Some random text in here about breeding animals"} title={"Projets d'élévage à Berrechid"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={engrais} text={"Some random text in here about breeding animals"} title={"Projets d'élévage à Berrechid"}/>
      </SwiperSlide>
      <SwiperSlide>
         <OneService image={moutons} text={"Some random text in here about breeding animals"} title={"Projets d'élévage à Berrechid"}/>
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={im1} alt="Slide 5" />
      </SwiperSlide> */}
    </Swiper>
    </section>
  );
};

export default Carousel;

