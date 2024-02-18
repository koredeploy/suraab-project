import './SwiperCarousel.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Autoplay } from 'swiper/modules';
import slide1 from '../../../assets/slide1.png'
import slide2 from '../../../assets/slide2.png'
import slidethree from '../../../assets/slide3.png'
import panorama from '../../../assets/paranoma.png'


const SwiperCarousel = () => {
  return (
    <div className='py-10 relative'>
        <img src={panorama} alt="" className='absolute top-1 z-40' />
        <img src={panorama} alt="" className='absolute bottom-1 z-40' />

        <Swiper 
        // slidesPerView={3}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
        slidesPerView={3}
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
        modules={[Autoplay, ]}
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
  )
}

export default SwiperCarousel