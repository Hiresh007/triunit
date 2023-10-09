import React, {useEffect, useRef,useState} from 'react'
import { Swiper, SwiperSlide }from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quote from '../public/assets/quote.webp'
import Image from 'next/image'
import {LuChevronRight ,LuChevronLeft,LuChevronUp,LuChevronDown} from 'react-icons/lu'


const Parallax = () => {
  return (
    <section className='bg-[#04050b] font-poppins w-full lg:py-24'>
        <div class="h-[180vh] lg:w-4/5 mx-auto ">
        <div class="sticky top-[40%] flex flex-col items-center justify-center">
        <p class="font-bold text-[14px] text-[#ebbb36]">THE QUESTION</p>
        <p class="text-[64px] font-semibold">Why choose</p>
        <p class="text-[64px] font-semibold"> Liquide?</p>
        </div>
        <div class="relative z-1 flex flex-row items-center justify-between w-full">
        <div class="w-[20%]">
        <div>
            <Image alt="Questions" width="243" height="337" class="w-full" src="https://ik.imagekit.io/liquide/tr:w-364.5/images/Questions/sebi.png"/></div>
            
        <div>
            <Image alt="Questions" width="243" height="337" class="w-full mt-72" src="https://ik.imagekit.io/liquide/tr:w-364.5/images/Questions/unbiasedImpartial.png"/></div>
         </div>
        <div class="w-[20%]">
        <div><Image alt="AI engine" width="243" height="337" class="w-full" src="https://ik.imagekit.io/liquide/tr:w-364.5/images/Questions/aiEngine.png"/>
        </div>
        </div>
        <div class="mt-48 w-[20%]">
            <div>
                <Image alt="AI engine" width="243" height="337" class="w-full" src="https://ik.imagekit.io/liquide/tr:w-364.5/images/Questions/alumni.png"/>
            </div>
            <div>
            <Image alt="tradeHits" width="243" height="337" class="w-full mt-72" src="https://ik.imagekit.io/liquide/tr:w-364.5/images/Questions/tradeHits.png"/>
            </div>
            </div>
        </div>
       </div>
           <div className='lg:w-4/5 mx-auto lg:my-12 py-16'>
  <div className='w-full'>
             <small className='font-medium text-[#eb9236] text-[14px] tracking-[4px] '>NUMBERS</small>
             <div className='flex flex-col items-start my-8 leading-[2rem]'>
                <span className='text-white text-[64px] font-semibold'>We take pride in our numbers!</span>
             </div>
             <div className='lg:my-16 w-full'>
             <Image alt="Number" width="1215" height="24" class="" src="https://ik.imagekit.io/liquide/tr:w-1822.5/images/updatedPrideNumber.png"></Image>
             </div>
           </div>
           </div>
           <div className='lg:w-4/5  mx-auto'>
             <div className='w-full'>
             <small className='font-medium text-[#eb9236] text-[14px] tracking-[4px] '>TESTIMONIALS</small>
             <div className='flex flex-col items-start mt-12 leading-[2rem]'>
                <span className='text-white text-[64px] font-semibold'>People love what</span>

                <div className='flex items-center justify-between w-full'>

                <span className='text-white text-[64px] font-semibold'>we&#39;re doing!</span>
                <div className='flex w-[45%] gap-[7rem]'>
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
           </div>
           <div className='lg:w-4/5 mx-auto overflow-hidden' >
             <Swiper className='w-full lg:h-[75vh]'
              speed={3000}
              loop= "true"
               autoplay = {
                {
                  delay:3000,
                  disableOnInteraction:false
                }
               }
               navigation= {{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                
              }}
              slidesPerView={2}
              spaceBetween={350}  
              pagination={{
                clickable: true
              }}      
              modules={[Autoplay, Pagination, Navigation]}
             >
             <SwiperSlide> 
                 
                 <div className='w-[770px] mx-1 pt-10 pb-[24px]' >
                    <div className='w-full lg:w-full p-6 mx-auto relative border-[#6666667c] border-2 rounded-[32px] lg:rounded-[48px] lg:pt-20 lg:px-12 lg:pb-6 lg:mr-2 '>
                        <Image src={quote} width={300} className='absolute bottom-4 right-10'/>
                       <div className='mt-5 h-40 lg:h-16'>
                          <p className='text-[24px] font-bold text-white leading-10'>
                          If I’ve made one investment that’s truly paid off, it would be
                            paying for LiquideOne. Not only am I getting access to sound
                            investment opportunities, but Liquide has changed the way I
                            see my finances and my relationship with money.
                          </p>
                        </div> 
                    <div className='flex items-center gap-8 lg:mb-16 lg:mt-36'>
                    <div>
                        <div>
                        <Image alt="profile-pic" width="64" height="64" style={{borderRadius:"50%"}} class="w-11 lg:w-16" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/sakshi-jindal.png"/>
                        </div>
                        <div>
                        <Image alt="profile-pic" width="64" height="0" style={{resizeMode:"cover" , borderRadius:"50%"}} className="w-4 h-4 lg:w-7 lg:h-7 absolute left-[90px] bottom-[90px]  border-4 border-black rounded-full" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/indian-flag.png"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[24px] text-white'>Sakshi Jindal</p>
                        <p className='text-[20px] text-[#f0f0f09a]'>Senior Principal,Accenture</p>
                    </div>
                        </div>      
                    </div>
                 </div>
                 <div className='rounded-[5rem] absolute left-14 top-4 p-4 bg-gradient-to-r from-[#8a1cf9] via via-[#e90a70] to-[#ffb377] flex justify-center'>
                    <p className='text-[16px] font-bold'>Building for better future</p>
                 </div>
             </SwiperSlide>
             <SwiperSlide> 
                 
                 <div className='w-[770px] mx-1 pt-10 pb-[24px]' >
                    <div className='w-full lg:w-full p-6 mx-auto relative border-[#6666667c] border-2 rounded-[32px] lg:rounded-[48px] lg:pt-20 lg:px-12 lg:pb-6 lg:mr-2 '>
                        <Image src={quote} width={300} className='absolute bottom-4 right-10'/>
                       <div className='mt-5 h-40 lg:h-16'>
                          <p className='text-[24px] font-bold text-white leading-10'>
                          If I’ve made one investment that’s truly paid off, it would be
                            paying for LiquideOne. Not only am I getting access to sound
                            investment opportunities, but Liquide has changed the way I
                            see my finances and my relationship with money.
                          </p>
                        </div> 
                    <div className='flex items-center gap-8 lg:mb-16 lg:mt-36'>
                    <div>
                        <div>
                        <Image alt="profile-pic" width="64" height="64" style={{borderRadius:"50%"}} class="w-11 lg:w-16" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/sakshi-jindal.png"/>
                        </div>
                        <div>
                        <Image alt="profile-pic" width="64" height="0" style={{resizeMode:"cover" , borderRadius:"50%"}} className="w-4 h-4 lg:w-7 lg:h-7 absolute left-[90px] bottom-[90px]  border-4 border-black rounded-full" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/indian-flag.png"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[24px] text-white'>Sakshi Jindal</p>
                        <p className='text-[20px] text-[#f0f0f09a]'>Senior Principal,Accenture</p>
                    </div>
                        </div>      
                    </div>
                 </div>
                 <div className='rounded-[5rem] absolute left-14 top-4 p-4 bg-gradient-to-r from-[#8a1cf9] via via-[#e90a70] to-[#ffb377] flex justify-center'>
                    <p className='text-[16px] font-bold'>Building for better future</p>
                 </div>
             </SwiperSlide>
             <SwiperSlide> 
                 
                 <div className='w-[770px] mx-1 pt-10 pb-[24px]' >
                    <div className='w-full lg:w-full p-6 mx-auto relative border-[#6666667c] border-2 rounded-[32px] lg:rounded-[48px] lg:pt-20 lg:px-12 lg:pb-6 lg:mr-2 '>
                        <Image src={quote} width={300} className='absolute bottom-4 right-10'/>
                       <div className='mt-5 h-40 lg:h-16'>
                          <p className='text-[24px] font-bold text-white leading-10'>
                          If I’ve made one investment that’s truly paid off, it would be
                            paying for LiquideOne. Not only am I getting access to sound
                            investment opportunities, but Liquide has changed the way I
                            see my finances and my relationship with money.
                          </p>
                        </div> 
                    <div className='flex items-center gap-8 lg:mb-16 lg:mt-36'>
                    <div>
                        <div>
                        <Image alt="profile-pic" width="64" height="64" style={{borderRadius:"50%"}} class="w-11 lg:w-16" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/sakshi-jindal.png"/>
                        </div>
                        <div>
                        <Image alt="profile-pic" width="64" height="0" style={{resizeMode:"cover" , borderRadius:"50%"}} className="w-4 h-4 lg:w-7 lg:h-7 absolute left-[90px] bottom-[90px]  border-4 border-black rounded-full" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/indian-flag.png"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[24px] text-white'>Sakshi Jindal</p>
                        <p className='text-[20px] text-[#f0f0f09a]'>Senior Principal,Accenture</p>
                    </div>
                        </div>      
                    </div>
                 </div>
                 <div className='rounded-[5rem] absolute left-14 top-4 p-4 bg-gradient-to-r from-[#8a1cf9] via via-[#e90a70] to-[#ffb377] flex justify-center'>
                    <p className='text-[16px] font-bold'>Building for better future</p>
                 </div>
             </SwiperSlide>
             <SwiperSlide> 
                 
                 <div className='w-[770px] mx-1 pt-10 pb-[24px]' >
                    <div className='w-full lg:w-full p-6 mx-auto relative border-[#6666667c] border-2 rounded-[32px] lg:rounded-[48px] lg:pt-20 lg:px-12 lg:pb-6 lg:mr-2 '>
                        <Image src={quote} width={300} className='absolute bottom-4 right-10'/>
                       <div className='mt-5 h-40 lg:h-16'>
                          <p className='text-[24px] font-bold text-white leading-10'>
                          If I’ve made one investment that’s truly paid off, it would be
                            paying for LiquideOne. Not only am I getting access to sound
                            investment opportunities, but Liquide has changed the way I
                            see my finances and my relationship with money.
                          </p>
                        </div> 
                    <div className='flex items-center gap-8 lg:mb-16 lg:mt-36'>
                    <div>
                        <div>
                        <Image alt="profile-pic" width="64" height="64" style={{borderRadius:"50%"}} class="w-11 lg:w-16" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/sakshi-jindal.png"/>
                        </div>
                        <div>
                        <Image alt="profile-pic" width="64" height="0" style={{resizeMode:"cover" , borderRadius:"50%"}} className="w-4 h-4 lg:w-7 lg:h-7 absolute left-[90px] bottom-[90px]  border-4 border-black rounded-full" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/indian-flag.png"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[24px] text-white'>Sakshi Jindal</p>
                        <p className='text-[20px] text-[#f0f0f09a]'>Senior Principal,Accenture</p>
                    </div>
                        </div>      
                    </div>
                 </div>
                 <div className='rounded-[5rem] absolute left-14 top-4 p-4 bg-gradient-to-r from-[#8a1cf9] via via-[#e90a70] to-[#ffb377] flex justify-center'>
                    <p className='text-[16px] font-bold'>Building for better future</p>
                 </div>
             </SwiperSlide>
             <SwiperSlide> 
                 
                 <div className='w-[770px] mx-1 pt-10 pb-[24px]' >
                    <div className='w-full lg:w-full p-6 mx-auto relative border-[#6666667c] border-2 rounded-[32px] lg:rounded-[48px] lg:pt-20 lg:px-12 lg:pb-6 lg:mr-2 '>
                        <Image src={quote} width={300} className='absolute bottom-4 right-10'/>
                       <div className='mt-5 h-40 lg:h-16'>
                          <p className='text-[24px] font-bold text-white leading-10'>
                          If I’ve made one investment that’s truly paid off, it would be
                            paying for LiquideOne. Not only am I getting access to sound
                            investment opportunities, but Liquide has changed the way I
                            see my finances and my relationship with money.
                          </p>
                        </div> 
                    <div className='flex items-center gap-8 lg:mb-16 lg:mt-36'>
                    <div>
                        <div>
                        <Image alt="profile-pic" width="64" height="64" style={{borderRadius:"50%"}} class="w-11 lg:w-16" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/sakshi-jindal.png"/>
                        </div>
                        <div>
                        <Image alt="profile-pic" width="64" height="0" style={{resizeMode:"cover" , borderRadius:"50%"}} className="w-4 h-4 lg:w-7 lg:h-7 absolute left-[90px] bottom-[90px]  border-4 border-black rounded-full" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/indian-flag.png"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[24px] text-white'>Sakshi Jindal</p>
                        <p className='text-[20px] text-[#f0f0f09a]'>Senior Principal,Accenture</p>
                    </div>
                        </div>      
                    </div>
                 </div>
                 <div className='rounded-[5rem] absolute left-14 top-4 p-4 bg-gradient-to-r from-[#8a1cf9] via via-[#e90a70] to-[#ffb377] flex justify-center'>
                    <p className='text-[16px] font-bold'>Building for better future</p>
                 </div>
             </SwiperSlide>
             <SwiperSlide> 
                 
                 <div className='w-[770px] mx-1 pt-10 pb-[24px]' >
                    <div className='w-full lg:w-full p-6 mx-auto relative border-[#6666667c] border-2 rounded-[32px] lg:rounded-[48px] lg:pt-20 lg:px-12 lg:pb-6 lg:mr-2 '>
                        <Image src={quote} width={300} className='absolute bottom-4 right-10'/>
                       <div className='mt-5 h-40 lg:h-16'>
                          <p className='text-[24px] font-bold text-white leading-10'>
                          If I’ve made one investment that’s truly paid off, it would be
                            paying for LiquideOne. Not only am I getting access to sound
                            investment opportunities, but Liquide has changed the way I
                            see my finances and my relationship with money.
                          </p>
                        </div> 
                    <div className='flex items-center gap-8 lg:mb-16 lg:mt-36'>
                    <div>
                        <div>
                        <Image alt="profile-pic" width="64" height="64" style={{borderRadius:"50%"}} class="w-11 lg:w-16" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/sakshi-jindal.png"/>
                        </div>
                        <div>
                        <Image alt="profile-pic" width="64" height="0" style={{resizeMode:"cover" , borderRadius:"50%"}} className="w-4 h-4 lg:w-7 lg:h-7 absolute left-[90px] bottom-[90px]  border-4 border-black rounded-full" src="https://ik.imagekit.io/liquide/tr:w-96/images/testimonials/v2/indian-flag.png"/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[24px] text-white'>Sakshi Jindal</p>
                        <p className='text-[20px] text-[#f0f0f09a]'>Senior Principal,Accenture</p>
                    </div>
                        </div>      
                    </div>
                 </div>
                 <div className='rounded-[5rem] absolute left-14 top-4 p-4 bg-gradient-to-r from-[#8a1cf9] via via-[#e90a70] to-[#ffb377] flex justify-center'>
                    <p className='text-[16px] font-bold'>Building for better future</p>
                 </div>
             </SwiperSlide>
             </Swiper>
    </div>
    </section>
  )
}

export default Parallax
