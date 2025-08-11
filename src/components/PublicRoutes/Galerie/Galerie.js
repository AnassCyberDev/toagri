import React, { useState } from 'react';
import image1 from "./Galerie/first.webp";
import image2 from "./Galerie/second.webp";
import image3 from "./Galerie/third.webp";
import image4 from "./Galerie/Rectangle 51.webp";
import image5 from "./Galerie/Rectangle 52.webp";
import image6 from "./Galerie/Rectangle 50.webp";
import image7 from "./Galerie/Rectangle 51.webp";
import image8 from "./Galerie/Rectangle 53.webp";
import image9 from "./Galerie/Rectangle 54.webp";
import image10 from "./Galerie/Rectangle 92.webp";
import image11 from "./Galerie/Rectangle 93.webp";
import image12 from "./Galerie/Rectangle 96.webp";
import image13 from "./Galerie/Rectangle 97.webp";
import image14 from "./Galerie/Rectangle 98.webp";
import image15 from "./Galerie/Rectangle 99.webp";
import { Title } from '../Title/Title';
import { OneImage } from './OneImage';
import { OneImageSmall } from './OneImageSmall';
import { Carousel } from 'react-bootstrap';

export const Galerie = () => {
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

  const images = [
    { description: 'Site industriel', src: image1 },
    { description: 'Neutralisation', src: image2 },
    { description: '', src: image3 },
    { description: '', src: image4 },
    { description: 'Avant', src: image5 },
    { description: 'Apres', src: image6 },
    { description: '', src: image7 },
    { description: 'Avant', src: image8 },
    { description: 'Apres', src: image9 },
    { description: '', src: image10 },
    { description: '', src: image11 },
    { description: '', src: image12 },
    { description: '', src: image13 },
    { description: '', src: image14 },
    { description: '', src: image15 },
  ];

  return (
    <section id='galerie'>
      <Title text={"GALERIE"} />
      <div className='container'>
        <div className='logo1'>
          <div className='flexColCenter logo2'>
            {/* Existing layout */}
            <div className='flexRowBetween w100'>
              <OneImage description={"Site industriel"} image={image1} />
              <OneImage description={"Neutralisation"} image={image2} />
              <OneImage description={""} image={image3} />
            </div>
            <div className='flexRowBetween w100'>
              <OneImage description={""} image={image6} />
              <OneImage description={"Avant"} image={image5} />
              <OneImage description={"Apres"} image={image7} />
            </div>
            <div className='flexRowBetween w100'>
              <OneImage description={""} image={image8} />
              <OneImage description={""} image={image9} />
            </div>
            <div className='flexRowBetween w100'>
              <OneImage description={"Avant"} image={image10} />
              <OneImage description={"Apres"} image={image11} />
              <OneImage description={""} image={image12} />
            </div>
            <div className='flexRowBetween w100 mb-5'>
              <OneImage description={""} image={image13} />
              <OneImage description={""} image={image14} />
              <OneImage description={""} image={image15} />
            </div>
          </div>
        </div>
        <div className='logo2'>
          {/* Carousel with activeIndex and onSelect props */}
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <OneImageSmall description={image.description} image={image.src} />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Thumbnails */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
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
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image.src}
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
      </div>
    </section>
  );
};
