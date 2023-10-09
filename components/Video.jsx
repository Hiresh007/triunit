import React, {useRef} from 'react'
import { useInView } from "react-intersection-observer";

const Video = () => {
    const imageRef = useRef(null);
    const { ref: firstContainer, inView: firstInView } = useInView({
        threshold: 0
      });
    
      const { ref: secondContainer, inView: secondInView } = useInView({
        threshold: 0
      });
    
      const { ref: thirdContainer, inView: thirdInView } = useInView({
        threshold: 0
      });

      const getImage = () => {
        if (firstInView) {
     
          return "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
        }
        if (secondInView)
          return "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270";
        if (thirdInView)
          return "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png";
      };
    
  return (
    <section className='bg-[#000101] lg:pt-[160px] lg:pb-[112px] w-full font-poppins '>
       <div className='lg:w-4/5 mx-auto'>
       <p class="font-bold text-[14px] text-[#ebbb36]">OUR OFFERINGS</p>
        <p class="text-[64px] font-semibold">How do we help you?</p>
       </div>
    <div className='lg:w-4/5 mx-auto lg:mt-8  flex'>
        <div className='lg:w-11/12'>
        <div class="p-4 w-1/3 lg:w-1/2  rounded-2xl border-[1px] border-gray-900 mt-2 saturate-0" style={{backgroundColor: "transparent"}}>
            <div class="flex items-center gap-4">
            <div class=""><img alt="Prop" width="42" height="48" class="h-[48px] w-[48px] object-contain" src="https://ik.imagekit.io/liquide/tr:w-63/images/ourOfferings/tradeSetup.png"/></div>
            <div><p className='font-bold text-[20px] text-[#ffffff7a]'>Expert recommended trade setups</p></div></div>
            </div>
        <div class="p-4 w-1/3 lg:w-1/2  rounded-2xl border-[1px] border-gray-900 mt-2 saturate-0" style={{backgroundColor: "transparent"}}>
            <div class="flex items-center gap-4">
            <div class=""><img alt="Prop" width="48" height="48" class="h-[48px] w-[48px] object-contain" src="https://ik.imagekit.io/liquide/tr:w-72/images/ourOfferings/limo.png"/></div>
            <div><p className='font-bold text-[20px] text-[#ffffff7a]'>
LiMo: AI powered bot at your service</p></div></div>
            </div>
        <div class="p-4 w-1/3 lg:w-1/2  rounded-2xl border-[1px] border-gray-900 mt-2 saturate-0" style={{backgroundColor: "transparent"}}>
            <div class="flex items-center gap-4">
            <div class=""><img alt="Prop" width="48" height="48" class="h-[48px] w-[48px] object-contain" src="https://ik.imagekit.io/liquide/tr:w-72/images/ourOfferings/portfoliohealth.png"/></div>
            <div><p className='font-bold text-[20px] text-[#ffffff7a]'>Portfolio health checkup</p></div></div>
            </div>
        <div class="p-4 w-1/3 lg:w-1/2  rounded-2xl border-[1px] border-gray-900 mt-2 saturate-0" style={{backgroundColor: "transparent"}}>
            <div class="flex items-center gap-4">
            <div class=""><img alt="Prop" width="48" height="48" class="h-[48px] w-[48px] object-contain" src="https://ik.imagekit.io/liquide/tr:w-72/images/ourOfferings/expertHotline.png"/></div>
            <div><p className='font-bold text-[20px] text-[#ffffff7a]'>Expert hotline support for your portfolio</p></div></div>
            </div>
        <div class="p-4 w-1/3 lg:w-1/2  rounded-2xl border-[1px] border-gray-900 mt-2 saturate-0" style={{backgroundColor: "transparent"}}>
            <div class="flex items-center gap-4">
            <div class=""><img alt="Prop" width="43" height="48" class="h-[48px] w-[48px] object-contain" src="https://ik.imagekit.io/liquide/tr:w-64.5/images/ourOfferings/marketCommentary.png"/></div>
            <div><p className='font-bold text-[20px] text-[#ffffff7a]'>Market expedition with screeners & market commentary</p></div></div>
            </div>
        </div>
        <div className='lg:w-[560px] lg:h-[5600px] absolute right-[6em] '>
        <video disableRemotePlayback="" loop="" autoPlay=""  playsInline="" poster='https://ik.imagekit.io/liquide/images/video-play-image.png?tr=h-420,q-40' className="w-full lg:w-full rounded-[50px] object-fill "><source src="https://ik.imagekit.io/liquide/videos/FinalVideo.mp4?tr=w-600,q-100" type="video/mp4"/></video>
        </div>
    </div>
    </section>
  )
}

export default Video
