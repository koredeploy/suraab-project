import "./SwiperCarousel.scss";
import "swiper/css";
import "swiper/css/pagination";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import slide1 from "../../../assets/slide1.png";
import slide2 from "../../../assets/slide2.png";
import slidethree from "../../../assets/slide3.png";
import panorama from "../../../assets/paranoma.png";

const SwiperCarousel = () => {
  return (
    <div className="py-10 relative flex justify-center items-center">
      <img src={panorama} alt="" className="absolute top-1 z-30 w-full" />
      <img src={panorama} alt="" className="absolute bottom-1 z-30 w-full" />

      <Swiper

breakpoints={{
    320: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
  }}

        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidethree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidethree} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
