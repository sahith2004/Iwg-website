import React , { useRef, useState }from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectFade } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Banner.css'


const BannerSlider = () => {
  return (
    <>
    <section>
     <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y,EffectCards]}
     spaceBetween={50}
     freeMode={true}
     grabCursor={true}
     
     
     navigation
     pagination={{ clickable: true }}
    
     
     
      effect={"cards"}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     className='swiper'>
      <div className='swiper-wrapper'>
      <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
        </div>
      ...
    </Swiper>
    
    </section>
    </>
  )
}

export default BannerSlider