import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import "./Slider.css";

const Slider = ({ slides, parallaxIntensity = -23, transitionSpeed = 800 }) => {
  return (
    <Swiper
      speed={transitionSpeed}
      parallax={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="custom-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="parallax-bg"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
            data-swiper-parallax={`${parallaxIntensity}%`}
          ></div>
          <div className="content">
            <div className="title" data-swiper-parallax="-300">
              {slide.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              {slide.subtitle}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>{slide.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
