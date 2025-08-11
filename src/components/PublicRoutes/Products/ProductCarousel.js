import React,{useState} from 'react'

import { OneImageSmall } from '../Galerie/OneImageSmall';
import { Carousel } from 'react-bootstrap';

export const ProductCarousel = ({product,ip_address}) => {
  console.log('product',product)
    const [index, setIndex] = useState(0);
     const [isDragging, setIsDragging] = useState(false);
     const [startX, setStartX] = useState(0);
     const [scrollLeft, setScrollLeft] = useState(0);
   
     const handleSelect = (selectedIndex) => {
       setIndex(selectedIndex);
     };
   
     const startDrag = (e) => {
       setIsDragging(true);
       setStartX(e.pageX || e.touches[0].pageX);
       setScrollLeft(e.currentTarget.scrollLeft);
     };
   
     const stopDrag = () => {
       setIsDragging(false);
     };
   
     const drag = (e) => {
       if (!isDragging) return;
       e.preventDefault();
       const x = e.pageX || e.touches[0].pageX;
       const walk = (x - startX) * 1; // 1px scroll per 1px mouse move
       e.currentTarget.scrollLeft = scrollLeft - walk;
     };
   


  return (

            <div>
          {/* Carousel with activeIndex and onSelect props */}
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {product.map((image, idx) => (
              <Carousel.Item key={idx}>
                <OneImageSmall image={`${ip_address}${image}`} />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Thumbnails */}
          <div
            style={{
              display: 'flex',
            //   justifyContent: 'center',
              marginTop: 10,
              overflowX: 'scroll',
              cursor: isDragging ? 'grabbing' : 'grab',
              margin:20
            }}
            onMouseDown={startDrag}
            onMouseUp={stopDrag}
            onMouseMove={drag}
            onTouchStart={startDrag}
            onTouchEnd={stopDrag}
            onTouchMove={drag}
          >
            {product.map((image, idx) => (
              <img
                key={idx}
                src={`${ip_address}${image}`}
                onClick={() => handleSelect(idx)}
                style={{
                  width: 'auto',
                  height: 60,
                  margin: '0 5px',
                  cursor: 'pointer',
                  border: idx === index ? '2px solid #E75D0E' : '2px solid transparent',
                  borderRadius: 5,
                  objectFit: 'cover',
                  flexShrink: 0,
                
                }}
                alt={`Thumbnail ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
                
    

  )
}
