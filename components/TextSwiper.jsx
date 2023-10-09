import React, { useEffect } from 'react';
import { Swiper, SwiperSlide }from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TextSwiper = ({ texts }) => {
 
  return (
    <Swiper className='h-16 absolute  w-full mb-8' direction='vertical'
    slidesPerView={1}
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
        delay: 2000,
        disableOnInteraction: false,
    }}
    speed={500}
    loop={true}
  
    modules={[Autoplay, Pagination, Navigation]}>
      {texts.map((text, index) => (
        <SwiperSlide key={index} className='mb-7'>
            <div className="bg-gradient-to-tr from-[#620dd0] via-[#e60e7e] to-[#f4b64a] bg-clip-text">
                
            <p className='text-[60px] font-bold text-transparent'>{text}</p>
            </div>
            </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TextSwiper;
