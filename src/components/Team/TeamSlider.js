import React from "react";
import ReactDOM from "react-dom";
import { TeamData } from "./Teamdata";
import { FaFacebook,FaInstagram,FaLinkedinIn} from "react-icons/fa";
import "./Team.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function TeamSlider() {
   
  return (
    <>
      
      <div className="team-slider">

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        freeMode={true}
        grabCursor={true}
        slidesPerView={3}
        
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
            0:{
                slidesPerView:1,
                spaceBetween:10,
            },
            480: {
                slidesPerView:2,
                spaceBetween:10,
            },
            768: {
                slidesPerView:2,
                spaceBetween:15,
            },
            1024: {
                slidesPerView : 3,
                spaceBetween : 15,
            }
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {TeamData.map(user => (
            <SwiperSlide key={user.id} className="slide">
              <div className="slide-content">
                <div className="user-image">
                  <img src={user.imgSrc} alt=" " className="user-photo"></img>
                  <div className="user-social-links">
                <a href={user.faLink} target="_blank" ><FaFacebook  className="social-media-icon"/></a>
                <a href={user.instaLink} target="_blank"><FaInstagram className="social-media-icon"/></a>
                <a href={user.linkedinLink} target="_blank" ><FaLinkedinIn className="social-media-icon"/></a>
                </div>
                </div>
               
                <div className="user-details">
                <h4>{user.HeadName}</h4>
                <h5>{user.title}</h5>
                
              </div>
                </div>
                
            </SwiperSlide>
        ))}
    
      
    </Swiper>
      </div>
    </>
  );
}
export default TeamSlider

