'use client'
import React, {useRef , useEffect, useState} from 'react'
import {BiLogoPlayStore, BiLogoApple} from 'react-icons/bi'
import {FaLocationDot, FaEnvelope} from 'react-icons/fa6'
import {IoCall} from 'react-icons/io5'
import {LuChevronRight ,LuChevronLeft,LuChevronUp,LuChevronDown} from 'react-icons/lu'
import {TbTriangleFilled} from 'react-icons/tb'
import {MdOutlineDone} from 'react-icons/md'
import banner from '../public/assets/banner.webp'
import banner2 from '../public/assets/banner2.webp'
import play from '../public/assets/play.png'
import apple from '../public/assets/apple.png'
import Image from 'next/image'
import { Swiper, SwiperSlide }from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Parallax from './Parallax'
import Video from './Video'
import Navbar from './Navbar'
import TextSwiper from './TextSwiper'
const Home = () => {
    const [show1 , setshow1] = useState(false)
    const [show2 , setshow2] = useState(false)
    const [show3 , setshow3] = useState(false)
    const textArray = [
      'Explore Market!',
      'Invest!',
      'Explore Stocks!',
    ];

  
  return (
   <section >
    <Navbar/>
    <section className='w-full bg-bg1 font-poppins'>
      <div className='h-[10px]'></div>
       <div className=" mx-auto lg:w-4/5 mt-12 py-[2.4rem] px-3">
          <div className='flex items-center '>
          <div class="w-full flex flex-col items-left md:items-start lg:px-0  pr-12 lg:pr-0  
                ">
                <div className='flex w-full flex-col items-start leading-[5rem]'>
                <span class="m-0 p-0 text-[72px] font-semibold ">We&#39;re changing</span>
                <span class="m-0 text-[72px] font-semibold p-0">the way you</span>
                <p class="body2 md:text-2xl text-gray-200 md:text-left mt-8">
                </p>
                <div className='absolute top-[18rem]'> 
                <TextSwiper texts={textArray}/>
                </div>
              
                </div>    
                <button className='px-4 py-[13px] mt-16 w-[55%] rounded-[5rem] bg-gradient-to-b from-[#fdd14c] to-[#eb9236]'>
                    <div className='flex items-center justify-evenly'>
                       <BiLogoPlayStore color='black' size="23px"/>
                       <BiLogoApple color='black' size="23px"/>
                       <p className='text-black text-[20px] font-poppins font-semibold'>Download the app</p>
                    </div>
               </button>
          </div>
         


          <div  class=" mt-12 lg:w-full lg:mt-0 min-h-full"  ><video disableremoteplayback="" loop="" autoplay=""  playsinline="" poster='https://ik.imagekit.io/liquide/images/video-play-image.png?tr=h-420,q-40' class="w-full lg:w-full rounded-[50px] object-fill mt-12"><source src="https://ik.Imagekit.io/liquide/videos/liquide-promotional-video.mp4?tr=h-420,q-40" type="video/mp4"/></video></div>
          </div>

           <div class="hidden lg:block w-full mx-4 bt-2 border-[1px] lg:border-[1px] rounded-full opacity-20 lg:mt-16 lg:mb-16 lg:w-full"></div>
          <div class="hidden lg:flex lg:justify-center lg:items-center mx-4"><div class="flex justify-center w-[50%] lg:w-[50%]"><div class=""><Image alt="Image" width="32" height="87" class="w-8 mt-1" src="https://ik.Imagekit.io/liquide/tr:w-48/v2icons/liquide-broach.png"/></div><div class="ml-2 lg:ml-5"><p class="body1 leading-5 lg:desktopCaptionBold lg:leading-7 text-[20px] font-bold">Liquide Trust</p><p class="w-4/5 captionWhite leading-5 opacity-50 mt-2 lg:desktopCaption3Light lg:leading-6 lg:w-2/3 text-[14px]">Trade setups by SEBI Registered Research Analyst</p></div></div><div class="flex justify-center w-[50%] lg:w-[50%]">
            
            <div class=""><Image alt="Image" width="30" height="84" class="w-8 mt-1" src="https://ik.Imagekit.io/liquide/tr:w-45/v2icons/liquide-tick.png" /></div><div class="ml-2 lg:ml-5"><p class="body1 leading-5 lg:desktopCaptionBold lg:leading-7 text-[20px] font-bold">Liquide Secure</p><p class="w-4/5 captionWhite leading-5 opacity-50 mt-2 lg:desktopCaption3Light lg:leading-6 lg:w-2/3 text-[14px]">Buy stocks 100% securely in your own broker account</p></div></div><div class="flex justify-center w-[50%] lg:w-[50%]">
            
            <div class=""><Image alt="Image" width="32" height="88" class="w-8 mt-1" src="https://ik.Imagekit.io/liquide/tr:w-48/v2icons/dual-ring.png"/></div><div class="ml-2 lg:ml-5"><p class="body1 leading-5 lg:desktopCaptionBold lg:leading-7 text-[20px] font-bold">Transparent</p><p class="w-4/5 captionWhite leading-5 opacity-50 mt-2 lg:desktopCaption3Light lg:leading-6 lg:w-2/3 text-[14px]">Realtime tracking &amp; 
          full user control</p></div></div></div>
       </div>
    </section>
    <section className='w-full bg-bg2 '>
         <div className='flex items-center justify-evenly py-7'>
            <a href="https://inc42.com/buzz/wealthtech-startup-liquide-raises-funding-to-help-investors-manage-broker-accounts/" target='_blank'><Image alt="cnbc" width="128" height="24" class="w-16 lg:w-32 mx-auto opacity-100 hover:opacity-100" src="https://ik.Imagekit.io/liquide/tr:w-192/v2logos/media-highlights/inc-42.png"/></a>

            <a target='_blank' href="https://www.cnbctv18.com/startup/funding-rundown-servify-raises-65-mn-in-ongoing-series-d-round-revsureai-bags-35-mn-loopworm-raises-34-mn-from-omnivore-14581621.htm"><Image alt="cnbc" width="192" height="24" class="w-20 lg:w-48 mx-auto opacity-100 hover:opacity-100" src="https://ik.Imagekit.io/liquide/tr:w-288/v2logos/media-highlights/cnbc.png"/></a>
            <a target='_blank' href="https://viestories.com/wealthtech-liquide-raises-2-2-mn-in-pre-seed-round/"><Image alt="cnbc" width="144" height="24" class="w-16 lg:w-36 mx-auto opacity-100 hover:opacity-100" src="https://ik.Imagekit.io/liquide/tr:w-216/v2logos/media-highlights/yourstory.png"/></a>
            <a target='_blank' href="https://www.business-standard.com/article/companies/wealthtech-firm-liquide-raises-2-2-mn-pre-seed-led-by-m-venture-partners-122082400593_1.html">
            <Image alt="cnbc" width="305" height="24" class="w-32 lg:w-[305px] m-auto opacity-100 hover:opacity-100" src="https://ik.Imagekit.io/liquide/tr:w-457.5/v2logos/media-highlights/business-standard.png"/>
            </a>
            <a target='_blank' href="https://entrackr.com/2022/08/wealthtech-platform-liquide-nets-2-2-mn-in-pre-seed-funding/">
            <Image alt="cnbc" width="192" height="24" class="w-20 lg:w-48 m-auto opacity-100 hover:opacity-100" src="https://ik.Imagekit.io/liquide/tr:w-288/v2logos/media-highlights/entrackr.png"/>
            </a>
         </div>
    </section>
    <Video/>
    <section className='bg-bg3 font-poppins w-full flex flex-col justify-center items-center'>
        <div className='w-4/5 mt-28 lg:mt-40'> 
          <a href="https://liquide.life/one" target='_blank' >
            <Image src={banner}/>
          </a>
        </div>
        <div className='w-4/5  flex items-center my-28 lg:my-40 lg:px-4'>
           <div className='w-9/12'>
             <small className='font-medium text-[#eb9236] text-[14px] tracking-[4px] '>PARTNERS</small>
             <div className='flex flex-col items-start leading-[5rem] mt-6'>
                <span className='text-white text-[64px] font-semibold'>We work with</span>
                <span className='text-white text-[64px] font-semibold'>India&#39;s most trusted</span>
                <span className='text-white text-[64px] font-semibold'>brokers</span>
             </div>
           </div>
           <div className='w-4/5 lg:w-[50%] '>
             <Image src={banner2} alt='banner'/>
           </div>
        </div>
    </section>
    <section className='bg-[#22232a] font-poppins w-full lg:px-6'>
       <div className='w-4/5 py-[96px] mx-auto flex flex-col items-center'>
             <div className='w-full'>
             <small className='font-medium text-[#eb9236] text-[14px] tracking-[4px] '>PAST PERFORMANCE</small>
             <div className='flex flex-col items-start mt-2 leading-[6rem]'>
                <span className='text-white text-[64px] font-semibold'>Our target</span>
                <span className='text-white text-[64px] font-semibold'>accuracy is market</span>
                <div className='flex items-center justify-between w-full'>

                <span className='text-white text-[64px] font-semibold'>beating!</span>
                <div className='flex w-[45%] gap-[6rem]'>
                <div class="hidden lg:block w-full mx-4 bt-2 border-[1px] lg:border-[1px] rounded-full opacity-20 lg:mt-16 lg:mb-16 lg:w-full">
                </div>
                <div className='relative w-5/12'>
                    <button  className=' swiper-button-prev' style={{scale:0.3, color:"white",fontWeight:"bold" }} ></button>
                    <button className='swiper-button-next' style={{scale:0.3,color:"white",marginLeft:"12px",fontWeight:"bold" }} ></button>
                </div>
                </div>
                </div>
             </div>
           </div>
           <div className='lg:w-4/5 mx-auto lg:h-[376px]' >
             <Swiper className='w-full h-full'

              
              navigation= {{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                
              }}
              slidesPerView={4}
              spaceBetween={10}  
              pagination={{
                clickable: true
              }}      
              modules={[Autoplay, Pagination, Navigation]}
             >
               <SwiperSlide>
              <div className='gap-[8px] p-[24px] bg-[#2f2e36] h-[313px] w-[230px] rounded-[35px] flex flex-col justify-start items-start mt-[32px]'>

<div class=""><Image alt="Image" width="50" height="50" class="w-10 h-10 p-1 rounded-xl lg:h-12 lg:w-12 object-contain bg-white" src="https://ik.Imagekit.io/liquide/tr:w-72/logos/MFSL_CROP.png"/>
</div>
<div className='mt-[8px] w-[180px] flex flex-col'>
<p className='text-[20px] font-bold'>MSFL</p>
<p className="text-[18px] w-[128px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#f0f0f08d] ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
</div>
<div className='flex items-center gap-[6px]'>
<TbTriangleFilled color='#33d33a' fontSize="12px"/>
<p className='text-[32px] font-semibold text-[#33d33a]'>7.3%</p>
</div>
<div className='mb-[4px] w-[128px] h-[40px] bg-[#36373f] rounded-3xl flex items-center justify-center gap-[8px]'> 
<svg class="h-4 mb-1 lg:mb-0 lg:h-5 lg:w-5" width="" height="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block",verticalAlign:"middle"}}><path d="M512 32c-265.6 0-480 214.4-480 480s214.4 480 480 480c265.6 0 480-214.4 480-480s-214.4-480-480-480zM736 441.6l-211.2 198.4c-35.2 32-89.6 32-128 0l-108.8-102.4c-22.4-22.4-22.4-57.6 0-80s57.6-22.4 76.8-3.2l96 89.6 198.4-185.6c22.4-22.4 57.6-19.2 76.8 3.2 22.4 22.4 22.4 57.6 0 80z" fill="rgb(255, 255, 255)" style={{fill: 
"rgb(51, 211, 58)",}}></path></svg>
    <p className="text-[14px] text-[#f0f0f08d] ">Target Hit</p>
</div>
<p className="text-[16px]  text-[#f0f0f08d] ">22 Aug &#39;23, 11:28 am</p>
</div>
               </SwiperSlide>
               <SwiperSlide>
              <div className='gap-[8px] p-[24px] bg-[#2f2e36] h-[313px] w-[230px] rounded-[35px] flex flex-col justify-start items-start mt-[32px]'>

<div class=""><Image alt="Image" width="50" height="50" class="w-10 h-10 p-1 rounded-xl lg:h-12 lg:w-12 object-contain bg-white" src="https://ik.Imagekit.io/liquide/tr:w-72/logos/MFSL_CROP.png"/>
</div>
<div className='mt-[8px] w-[180px] flex flex-col'>
<p className='text-[20px] font-bold'>MSFL</p>
<p className="text-[18px] w-[128px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#f0f0f08d] ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
</div>
<div className='flex items-center gap-[6px]'>
<TbTriangleFilled color='#33d33a' fontSize="12px"/>
<p className='text-[32px] font-semibold text-[#33d33a]'>7.3%</p>
</div>
<div className='mb-[4px] w-[128px] h-[40px] bg-[#36373f] rounded-3xl flex items-center justify-center gap-[8px]'> 
<svg class="h-4 mb-1 lg:mb-0 lg:h-5 lg:w-5" width="" height="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block",verticalAlign:"middle"}}><path d="M512 32c-265.6 0-480 214.4-480 480s214.4 480 480 480c265.6 0 480-214.4 480-480s-214.4-480-480-480zM736 441.6l-211.2 198.4c-35.2 32-89.6 32-128 0l-108.8-102.4c-22.4-22.4-22.4-57.6 0-80s57.6-22.4 76.8-3.2l96 89.6 198.4-185.6c22.4-22.4 57.6-19.2 76.8 3.2 22.4 22.4 22.4 57.6 0 80z" fill="rgb(255, 255, 255)" style={{fill: 
"rgb(51, 211, 58)",}}></path></svg>
    <p className="text-[14px] text-[#f0f0f08d] ">Target Hit</p>
</div>
<p className="text-[16px]  text-[#f0f0f08d] ">22 Aug &#39;23, 11:28 am</p>
</div>
               </SwiperSlide>
               <SwiperSlide>
              <div className='gap-[8px] p-[24px] bg-[#2f2e36] h-[313px] w-[230px] rounded-[35px] flex flex-col justify-start items-start mt-[32px]'>

<div class=""><Image alt="Image" width="50" height="50" class="w-10 h-10 p-1 rounded-xl lg:h-12 lg:w-12 object-contain bg-white" src="https://ik.Imagekit.io/liquide/tr:w-72/logos/MFSL_CROP.png"/>
</div>
<div className='mt-[8px] w-[180px] flex flex-col'>
<p className='text-[20px] font-bold'>MSFL</p>
<p className="text-[18px] w-[128px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#f0f0f08d] ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
</div>
<div className='flex items-center gap-[6px]'>
<TbTriangleFilled color='#33d33a' fontSize="12px"/>
<p className='text-[32px] font-semibold text-[#33d33a]'>7.3%</p>
</div>
<div className='mb-[4px] w-[128px] h-[40px] bg-[#36373f] rounded-3xl flex items-center justify-center gap-[8px]'> 
<svg class="h-4 mb-1 lg:mb-0 lg:h-5 lg:w-5" width="" height="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block",verticalAlign:"middle"}}><path d="M512 32c-265.6 0-480 214.4-480 480s214.4 480 480 480c265.6 0 480-214.4 480-480s-214.4-480-480-480zM736 441.6l-211.2 198.4c-35.2 32-89.6 32-128 0l-108.8-102.4c-22.4-22.4-22.4-57.6 0-80s57.6-22.4 76.8-3.2l96 89.6 198.4-185.6c22.4-22.4 57.6-19.2 76.8 3.2 22.4 22.4 22.4 57.6 0 80z" fill="rgb(255, 255, 255)" style={{fill: 
"rgb(51, 211, 58)",}}></path></svg>
    <p className="text-[14px] text-[#f0f0f08d] ">Target Hit</p>
</div>
<p className="text-[16px]  text-[#f0f0f08d] ">22 Aug &#39;23, 11:28 am</p>
</div>
               </SwiperSlide>
               <SwiperSlide>
              <div className='gap-[8px] p-[24px] bg-[#2f2e36] h-[313px] w-[230px] rounded-[35px] flex flex-col justify-start items-start mt-[32px]'>

<div class=""><Image alt="Image" width="50" height="50" class="w-10 h-10 p-1 rounded-xl lg:h-12 lg:w-12 object-contain bg-white" src="https://ik.Imagekit.io/liquide/tr:w-72/logos/MFSL_CROP.png"/>
</div>
<div className='mt-[8px] w-[180px] flex flex-col'>
<p className='text-[20px] font-bold'>MSFL</p>
<p className="text-[18px] w-[128px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#f0f0f08d] ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
</div>
<div className='flex items-center gap-[6px]'>
<TbTriangleFilled color='#33d33a' fontSize="12px"/>
<p className='text-[32px] font-semibold text-[#33d33a]'>7.3%</p>
</div>
<div className='mb-[4px] w-[128px] h-[40px] bg-[#36373f] rounded-3xl flex items-center justify-center gap-[8px]'> 
<svg class="h-4 mb-1 lg:mb-0 lg:h-5 lg:w-5" width="" height="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block",verticalAlign:"middle"}}><path d="M512 32c-265.6 0-480 214.4-480 480s214.4 480 480 480c265.6 0 480-214.4 480-480s-214.4-480-480-480zM736 441.6l-211.2 198.4c-35.2 32-89.6 32-128 0l-108.8-102.4c-22.4-22.4-22.4-57.6 0-80s57.6-22.4 76.8-3.2l96 89.6 198.4-185.6c22.4-22.4 57.6-19.2 76.8 3.2 22.4 22.4 22.4 57.6 0 80z" fill="rgb(255, 255, 255)" style={{fill: 
"rgb(51, 211, 58)",}}></path></svg>
    <p className="text-[14px] text-[#f0f0f08d] ">Target Hit</p>
</div>
<p className="text-[16px]  text-[#f0f0f08d] ">22 Aug &#39;23, 11:28 am</p>
</div>
               </SwiperSlide>
               <SwiperSlide>
              <div className='gap-[8px] p-[24px] bg-[#2f2e36] h-[313px] w-[230px] rounded-[35px] flex flex-col justify-start items-start mt-[32px]'>

<div class=""><Image alt="Image" width="50" height="50" class="w-10 h-10 p-1 rounded-xl lg:h-12 lg:w-12 object-contain bg-white" src="https://ik.Imagekit.io/liquide/tr:w-72/logos/MFSL_CROP.png"/>
</div>
<div className='mt-[8px] w-[180px] flex flex-col'>
<p className='text-[20px] font-bold'>MSFL</p>
<p className="text-[18px] w-[128px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#f0f0f08d] ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
</div>
<div className='flex items-center gap-[6px]'>
<TbTriangleFilled color='#33d33a' fontSize="12px"/>
<p className='text-[32px] font-semibold text-[#33d33a]'>7.3%</p>
</div>
<div className='mb-[4px] w-[128px] h-[40px] bg-[#36373f] rounded-3xl flex items-center justify-center gap-[8px]'> 
<svg class="h-4 mb-1 lg:mb-0 lg:h-5 lg:w-5" width="" height="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block",verticalAlign:"middle"}}><path d="M512 32c-265.6 0-480 214.4-480 480s214.4 480 480 480c265.6 0 480-214.4 480-480s-214.4-480-480-480zM736 441.6l-211.2 198.4c-35.2 32-89.6 32-128 0l-108.8-102.4c-22.4-22.4-22.4-57.6 0-80s57.6-22.4 76.8-3.2l96 89.6 198.4-185.6c22.4-22.4 57.6-19.2 76.8 3.2 22.4 22.4 22.4 57.6 0 80z" fill="rgb(255, 255, 255)" style={{fill: 
"rgb(51, 211, 58)",}}></path></svg>
    <p className="text-[14px] text-[#f0f0f08d] ">Target Hit</p>
</div>
<p className="text-[16px]  text-[#f0f0f08d] ">22 Aug &#39;23, 11:28 am</p>
</div>
               </SwiperSlide>
               <SwiperSlide>
              <div className='gap-[8px] p-[24px] bg-[#2f2e36] h-[313px] w-[230px] rounded-[35px] flex flex-col justify-start items-start mt-[32px]'>

<div class=""><Image alt="Image" width="50" height="50" class="w-10 h-10 p-1 rounded-xl lg:h-12 lg:w-12 object-contain bg-white" src="https://ik.Imagekit.io/liquide/tr:w-72/logos/MFSL_CROP.png"/>
</div>
<div className='mt-[8px] w-[180px] flex flex-col'>
<p className='text-[20px] font-bold'>MSFL</p>
<p className="text-[18px] w-[128px] overflow-ellipsis overflow-hidden whitespace-nowrap text-[#f0f0f08d] ">Lorem ipsum dolor sit amet consectetur adipisicing</p>
</div>
<div className='flex items-center gap-[6px]'>
<TbTriangleFilled color='#33d33a' fontSize="12px"/>
<p className='text-[32px] font-semibold text-[#33d33a]'>7.3%</p>
</div>
<div className='mb-[4px] w-[128px] h-[40px] bg-[#36373f] rounded-3xl flex items-center justify-center gap-[8px]'> 
<svg class="h-4 mb-1 lg:mb-0 lg:h-5 lg:w-5" width="" height="" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" style={{display: "inline-block",verticalAlign:"middle"}}><path d="M512 32c-265.6 0-480 214.4-480 480s214.4 480 480 480c265.6 0 480-214.4 480-480s-214.4-480-480-480zM736 441.6l-211.2 198.4c-35.2 32-89.6 32-128 0l-108.8-102.4c-22.4-22.4-22.4-57.6 0-80s57.6-22.4 76.8-3.2l96 89.6 198.4-185.6c22.4-22.4 57.6-19.2 76.8 3.2 22.4 22.4 22.4 57.6 0 80z" fill="rgb(255, 255, 255)" style={{fill: 
"rgb(51, 211, 58)",}}></path></svg>
    <p className="text-[14px] text-[#f0f0f08d] ">Target Hit</p>
</div>
<p className="text-[16px]  text-[#f0f0f08d] ">22 Aug &#39;23, 11:28 am</p>
</div>
               </SwiperSlide> 
             </Swiper>
    </div>
                
            </div>
           

    </section>
    <Parallax/>
    <section className='bg-[#191725] font-poppins '>
         <div className='w-full lg:w-4/5 mx-auto py-[120px] flex flex-col items-center'>
             <p className='font-semibold text-[#eb9236] mb-4 lg:mb-6 tracking-widest text-[15px]'>FAQ&#39;s</p>
             <div className='w-full '>
               <div className='py-[24px] w-full'>
                <div className='flex items-center justify-between'>
                <p className='text-[24px] font-bold tracking-wide'>How to start with Liquide</p>
                <button className='font-extrabold text-[24px]' onClick={() => setshow1(prev => !prev)}> {show1?<LuChevronUp/>:<LuChevronDown/>}</button>
                </div>
               {
                show1 &&
                <div>
                  <p className='leading-6 text-[16px] mt-[18px] mb-[12px] text-[#f0f0f09a]'>Connect your existing brokerage account and get set to use Liquide in under a minute. Four things you can immediately do on Liquide.</p>
                  <div className='ml-[24px] '>
                 <div>
                    <p className='font-bold text-[16px] mt-2 text-[#f0f0f09a]' ><span className='font-bold text-[16px] text-white'>1. Browse Stock Picks:</span> Buy stocks curated by our specialist investment team in the ‘Trades’ section. Liquide automatically informs you when to sell.</p>
                    <p className='font-bold text-[16px] mt-2 text-[#f0f0f09a]' ><span className='font-bold text-[16px] text-white'> 2. Ask LiMo:</span> Access automated research reports through our AI powered and expert supervised bot which gives a clear buy/sell or hold recommendation.</p>
                    <p className='font-bold text-[16px] mt-2 text-[#f0f0f09a]' ><span className='font-bold text-[16px] text-white'>3. Analyze Markets:</span> Easily research market movement and investor sentiment; browse top rated stocks.</p>
               
                    <p className='font-bold text-[16px] mt-2  text-[#f0f0f09a]' ><span className='font-bold text-[16px] text-white'>4. Check Portfolio Health:</span> Track your portfolio health and manage your stock holdings</p>
                   

 

                  </div>
                </div>
                </div>
                }
               </div>
               <div class="hidden lg:block w-full bt-2 border-[0.5px] lg:border-[0.5px] rounded-full opacity-20  lg:w-full">
                </div>
               <div className='py-[24px] w-full'>
                <div className='flex items-center justify-between'>
                <p className='text-[24px] font-bold tracking-wide'>Can I login via my current broker account?</p>
                <button className='font-extrabold text-[24px]' onClick={() => setshow2(prev => !prev)}> {show2?<LuChevronUp/>:<LuChevronDown/>}</button>
                </div>
                {
                  show2 &&  <div>
                  <p className='leading-6 text-[16px] mt-[20px] text-[#f0f0f09a]'>Yes, you can connect your existing Zerodha, Groww, Upstox, Dhan, 5paisa or AngelOne account from the homepage or portfolio page.</p>
                  </div>
                }
               
               </div>
               <div class="hidden lg:block w-full bt-2 border-[0.5px] lg:border-[0.5px] rounded-full opacity-20  lg:w-full">
                </div>
               <div className='py-[24px] w-full'>
                <div className='flex items-center justify-between'>
                <p className='text-[24px] font-bold tracking-wide'>What is a stock pick and how do I buy them?</p>
                <button className='font-extrabold text-[24px]' onClick={() => setshow3(prev => !prev)}> {show3?<LuChevronUp/>:<LuChevronDown/>}</button>
                </div>
                {
                  show3 &&  <div>
                  <p className='leading-6 text-[16px] mt-[20px] text-[#f0f0f09a]'>Stock picks are curated stock recommendations generated by our proprietary equity research. They come with automatic trade setups - i.e., Target and Stop Loss. You can buy a stock pick by swiping right. Once bought, we will give you smart alerts to help you exit the trade when the time is right, thereby maximising your profits and minimising losses.</p>
                  </div>
                }
               
               </div>
              
             </div>
             <div className='w-full flex justify-start'>
              <button ><h1 className='font-bold text-[24px] bg-gradient-to-b from-[#fdd14c] to-[#eb9236] bg-clip-text text-transparent'>{"see all >"}</h1></button>
             </div>
         </div>
    </section>
    <footer className='bg-[#0d0c13] font-poppins'>
       <div className='pt-[32px] flex flex-col'>
       <div class="flex justify-around w-full items-center mx-auto mt-5 lg:justify-between lg:w-4/5"><a class="flex justify-start text-white font-extrabold" href="/"><div class=""><Image alt="Liquide Logo" width="164" height="23" class="w-32 md:w-40 mx-2 lg:-ml-1" src="https://ik.Imagekit.io/liquide/tr:w-246/logos/Logo.png"/></div></a><div class=" lg:w-4/12 flex justify-around lg:items-center "><a target="_blank" href="https://t.me/liquideofficial" rel="noreferrer"><div class=""><Image alt="telegram vector" width="56" height="27" class=" w-3 lg:w-6 mx-4 cursor-pointer" src="https://ik.Imagekit.io/liquide/tr:w-84/v2icons/share.png"/></div></a><div><a target="_blank" href="https://www.instagram.com/liquide.life/" rel="noreferrer"><div class=""><Image alt="instagram vector" width="56" height="27" class=" w-3 lg:w-6 mx-4 cursor-pointer" src="https://ik.Imagekit.io/liquide/tr:w-84/v2icons/instagram-vector.png"/></div></a></div><div><a target="_blank" href="https://www.facebook.com/lifeisliquide" rel="noreferrer"><div class=""><Image alt="facebook vector" width="56" height="27" class=" w-3 lg:w-6 mx-4" src="https://ik.Imagekit.io/liquide/tr:w-84/v2icons/facebook-vector.png"/></div></a></div><div><a target="_blank" href="https://twitter.com/Liquide_Life" rel="noreferrer"><div class=""><Image alt="twitter vector" width="56" height="27" class=" w-3 lg:w-6 mx-4" src="https://ik.Imagekit.io/liquide/tr:w-84/v2icons/twitter-vector.png"/></div></a></div><div><a target="_blank" href="https://www.linkedin.com/company/liquidelife/" rel="noreferrer"><div class=""><Image alt="linkedin vector" width="56" height="24" class=" w-3 lg:h-6 lg:w-6 mx-4" src="https://ik.Imagekit.io/liquide/tr:w-84/v2icons/linkedin-vector.png"/></div></a></div>
       </div>
        </div>
        <div className='lg:w-4/5 lg:my-20 lg:mx-auto lg:grid lg:grid-cols-4 hidden'>
             <div className='flex flex-col gap-4'>
               <p className='text-[20px] text-white font-bold'>Liquide</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Home</p>
               <p className='text-[16px] text-[#f0f0f09a]'>About Us</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Trade</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Career</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Help & Support</p>
             </div>
             <div className='flex flex-col gap-4'>
               <p className='text-[20px] text-white font-bold'>Products</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Liquide App</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Portfolio checkup</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Liquide One</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Academy</p>
          
             </div>
             <div className='flex flex-col gap-4'>
               <p className='text-[20px] text-white font-bold'>Resources</p>
               <p className='text-[16px] text-[#f0f0f09a]'>News that moves</p>
               <p className='text-[16px] text-[#f0f0f09a]'>IPO Reports</p>
             </div>
             <div className='flex flex-col gap-4'>
               <p className='text-[20px] text-white font-bold'>Policy</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Privacy</p>
               <p className='text-[16px] text-[#f0f0f09a]'>Terms of use</p>
               
             </div>
        </div>
        <div className=' lg:w-4/5 flex justify-between items-center lg:mx-auto'>
            <p className='text-white text-[16px]'>Made with ❤️ in India</p>
            <div className='flex gap-4'>
              <div className='border border-white flex items-center justify-center rounded-[5rem] p-2'>
                <a href="https://play.google.com/store/apps/details?id=life.liquide.app">

                  <Image alt='' src={play} width={190} height={20} className="rounded-[5rem]"/>
                </a>
              </div>
              <div className='w-[200px]  border border-white rounded-[5rem] flex  justify-center'>
                <a href="https://apps.apple.com/us/app/liquide-stocks-investments/id1624726081">

              <Image src={apple} width={190} height={20} className="rounded-[5rem]" />
                </a>
              </div>
              
            </div>
        </div>
        <div class="w-11/12 mx-auto border-b-[1px] border-opacity-80 mt-16 mb-8 lg:w-4/5 lg:mx-auto lg:my-[56px]"></div>
        <div className='lg:w-4/5 mx-auto flex flex-col gap-5 '>
          <p className='text-[16px] text-[#f0f0f09a]'>Liquide Solutions Private Limited makes no warranties or representations, express or implied, on products and services offered through the platform. It accepts no liability for any damages or losses, however, caused in connection with the use of, or on the reliance of its advisory or related services.</p>
          <p className='text-[16px] text-[#f0f0f09a] tracking-wide'>
Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, goal, time frame, risk and reward balance and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs. Performance and returns of any investment portfolio can neither be predicted nor guaranteed.</p>
        </div>
       </div>
       <div className='flex flex-col lg:w-4/5 mx-auto mt-12'>
          <div className='lg:flex lg:w-9/12 lg:gap-12 items-center my-12'>
          <div className='flex gap-4 items-start'>
              <FaLocationDot size={30}/>
              <div className='flex flex-col text-[12px]'>
              <p>Signet Wing A, Cessna Business Park,</p>
              <p> Bengaluru, Karnataka 560103</p>
              </div>
             </div>
             <div className='flex gap-4 items-start '>
              <IoCall size={30}/>
              <div className='flex flex-col'>
              <p className='text-[18px] font-bold text-[#f0f0f09a] '>Call us at:</p>
              <p className='text-[12px]'> +91 700 643 0481</p>
              </div>
             </div>
             <div className='flex gap-4 items-start'>
              <FaEnvelope size={30}/>
              <div className='flex flex-col'>
              <p className='text-[18px] font-bold text-[#f0f0f09a] '>
For assistance, write to us:</p>
              <p className='text-[12px]' ><a href="mailto:support@liquide.life">support@liquide.life</a></p>
              </div>
             </div>
            
          </div>
          <div className='flex flex-col gap-3 lg:w-9/12 mb-24'>
            <p className='text-[12px] font-bold text-[#f0f0f09a]'>SEBI Registration Details</p>
            <p className='text-[16px] font-bold text-[#f0f0f09a]'>Name: Liquide Solutions Private Limited | RA No: INH000009816 | Reg. Type: Corporate | Validity: Perpetual  </p>
            <p  className='text-[12px] font-bold text-[#f0f0f09a]'>Associated SEBI regional office: SEBI, Jeevan Mangal Building, Hayes Rd, off, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025

For regulatory disclosures including the ‘Complaints disclosure’ and the SEBI ‘Investor Charter’, 
please click
<a href="https://liquide.life/sebi-disclosures" className="underline"> Here</a></p>
          </div>
       </div>
    </footer>
</section> 
  )
}

export default Home