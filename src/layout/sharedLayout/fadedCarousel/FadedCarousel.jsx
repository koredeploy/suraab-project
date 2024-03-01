import { useState, useEffect } from "react";
import "./FadedCarousel.scss";
import LazyLoad from "react-lazy-load"

const FadedCarousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/doejcrfso/image/upload/v1709113571/fadein3_vkfw7z.webp",
    "https://res.cloudinary.com/doejcrfso/image/upload/v1709113571/fadein1_okkg7z.webp",
    "https://res.cloudinary.com/doejcrfso/image/upload/v1709113571/fadein2_mtecij.webp",
  ]; // Add your image URLs here
  const imageUrl = images[index];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <LazyLoad height={500}>
      <div
        className="background-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease",
        }}
      ></div>
      </LazyLoad>
    </div>
  );
};

export default FadedCarousel;
