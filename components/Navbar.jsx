import React from 'react'

const Navbar = () => {
  return (
    <nav className='py-4 md:py-4 w-full z-50 top-0 fixed bg-gradient-to-b from-[#040509] to-[#141128] font-poppins  '>
      <div className='px-4 flex item-center justify-between'>
      <div class=""><img alt="Liquide Logo" width="176" height="22" className="w-32 md:w-40 mx-2 undefined" src="https://ik.imagekit.io/liquide/tr:w-264/logos/Logo.png"/></div>
     
      <div className='flex gap-8 items-center'>
        <div className='flex'>
        <svg class="mx-2" style={{display:"inline-block",verticalAlign:"middle"}} width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path style={{fill: "rgb(247, 206, 30)"}} d="M383.318 886.323v-130.464c0-33.302 28.627-60.301 63.939-60.301h129.088c16.957 0 33.219 6.355 45.21 17.664 11.994 11.309 18.73 26.646 18.73 42.637v130.464c-0.109 13.846 5.648 27.158 15.994 36.986 10.342 9.827 24.416 15.354 39.098 15.354h88.067c41.133 0.099 80.614-15.242 109.738-42.634 29.123-27.395 45.488-64.589 45.488-103.379v-371.67c0-31.334-14.726-61.056-40.214-81.158l-299.59-225.656c-52.115-39.565-126.784-38.288-177.341 3.034l-292.756 222.621c-26.69 19.51-42.643 49.322-43.431 81.158v371.29c0 80.851 69.496 146.394 155.225 146.394h86.057c30.493 0 55.274-23.203 55.494-51.958l1.206-0.381z" fill="rgb(255, 255, 255)"></path></svg>
        <p className='font-semibold text-[14px]' >Home</p>
        </div>
        <div className='flex'>
        <svg class="mx-2"style={{display:"inline-block",verticalAlign:"middle"}} width="22" height="22" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path style={{fill: "rgb(85, 84, 95)"}} d="M512 960c-247.424 0-448-200.576-448-448s200.576-448 448-448c247.424 0 448 200.576 448 448s-200.576 448-448 448zM623.91 444.243v-34.211h48.467v-65.571h-301.629v65.571h161.933v34.211h-161.933v59.299h159.082c-3.040 12.163-9.312 21.094-18.816 26.797-9.123 5.322-23.187 8.934-42.192 10.835-18.627 1.52-47.706 2.282-87.238 2.282v73.552c0 44.474 11.213 77.923 33.642 100.352 22.806 22.048 55.498 33.072 98.070 33.072 39.533 0 69.75-10.646 90.659-31.933 21.286-21.286 32.688-51.126 34.211-89.517h-90.090c0 15.965-2.851 27.939-8.554 35.92-5.702 7.984-15.203 11.974-28.509 11.974-14.064 0-23.949-3.99-29.648-11.974-5.702-8.362-8.554-19.955-8.554-34.781v-22.806c45.235 0 79.635-8.742 103.203-26.227 23.568-17.869 38.39-43.715 44.474-77.546h51.888v-59.299h-48.467z" fill="rgb(255, 255, 255)"></path></svg>
        <p className='font-semibold text-[14px] text-[#f0f0f06a]' >Trade</p>
        </div>
        <div className='flex'>
        <svg class="mx-2" style={{display:"inline-block",verticalAlign:"middle"}} width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path style={{fill:"#55545F"}} d="M826.454 160h-478.72c-9.958 0-19.507 4.045-26.55 11.25-7.040 7.198-10.995 16.969-10.995 27.148v249.602h-112.645c-9.952 0-19.506 4.045-26.544 11.251-7.045 7.197-11 16.966-11 27.146v230.403c0 30.547 11.864 59.853 32.994 81.456 21.124 21.61 49.775 33.744 79.646 33.744h459.948c34.851 0 68.278-14.163 92.925-39.363 24.637-25.203 38.486-59.392 38.486-95.037v-499.203c0-10.179-3.955-19.949-10.998-27.148-7.040-7.205-16.595-11.249-26.547-11.249zM310.187 716.803c0 13.722-7.156 26.397-18.779 33.254-11.615 6.858-25.929 6.858-37.543 0s-18.772-19.533-18.772-33.254v-192h75.095l-0.002 192zM404.448 316.665c0-28.841 22.861-52.222 51.062-52.222h255.306c28.198 0 51.059 23.381 51.059 52.222v156.666c0 28.842-22.861 52.221-51.059 52.221h-255.306c-28.202 0-51.062-23.379-51.062-52.221v-156.666zM455.51 603.885h255.306c28.198 0 51.059 23.382 51.059 52.224s-22.861 52.221-51.059 52.221h-255.306c-28.202 0-51.062-23.379-51.062-52.221s22.861-52.224 51.062-52.224z" fill="rgb(255, 255, 255)"></path></svg>
        <p className='font-bold text-[14px] text-[#55545F]' >News</p>
        </div>
        <div className='flex items-center'>
        <img alt="Image" width="40" height="24" class="w-6 mx-2 opacity-30" src="https://ik.imagekit.io/liquide/tr:w-60/images/academy-navbar-icon.png"/>
        <p className='font-bold text-[14px] text-[#55545F]' >Academy</p>
        </div>
        <div className="ml-10">
        <img alt="Image" width="56" height="48" class="h-12 w-12 mr-2" src="https://ik.imagekit.io/liquide/tr:w-84/images/v2/search-icon.png"/>
        </div>
      </div>
      <div class="hidden md:hidden lg:block"><a target="_blank" href="https://liquide.app.link/RjV1UsMxAvb"><div class="flex justify-center items-center cursor-pointer w-max"><div class=""><img alt="Image" width="48" height="24" class="hidden md:block h-6 w-6 mr-6" src="https://ik.imagekit.io/liquide/tr:w-72/v2icons/barcode-icon.png"/></div><p class="font-bold text-xl not-italic">Download app</p></div></a></div>
      </div>
    </nav>
  )
}

export default Navbar
