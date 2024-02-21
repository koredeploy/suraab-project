import { useState, useEffect } from 'react';
import './FadedCarousel.scss'

const FadedCarousel = () => {
  const [index, setIndex] = useState(0);
  const images = ['https://res.cloudinary.com/doejcrfso/image/upload/v1708428566/fadein2_pnepgn.png', 'https://res.cloudinary.com/doejcrfso/image/upload/v1708428566/fadein1_cqmuuj.png', 'https://res.cloudinary.com/doejcrfso/image/upload/v1708428564/fadein3_jgqake.png']; // Add your image URLs here
  const imageUrl = images[index];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="carousel-container"
     
    >
    
      <div
        className="background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease',
        }}
      ></div>
    </div>
  );
};

export default FadedCarousel;
