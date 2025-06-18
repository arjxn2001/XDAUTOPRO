import React from 'react'
import videoBgLg from "../assets/Video/VideoBgLg.mp4"
import "../Styling/videoPage.css"

const VideoPageLg = () => {
  return (
    <div className="mainVideo hidden sm:block w-full min-h-screen relative overflow-hidden">          
          {/* Background video */}
          <video
            className="video-bg"
            src={videoBgLg}
            autoPlay
            loop
            muted
            playsInline
          />
    
          {/* Overlay color */}
          <div className="overlay absolute top-0 left-0 w-full h-full z-10"></div>
    
          {/* Top and bottom fade */}
          <div className="video-fade absolute top-0 left-0 w-full h-full z-20"></div>
    
          {/* Content on top */}
          <div className="content absolute top-40 left-0 pe-10 w-full h-full z-30 flex flex-col items-end text-white ">
            {/* Add any content here */}
            <h1 className='lg:text-4xl md:text-4xl text-2xl font-extrabold tracking-tighter mb-4 text-shadow-black text-shadow-md'><span className='text-red-600 '>CARE YOUR CAR </span> <span className='text-neutral-400'>LIKE </span></h1>
            <h1 className='lg:text-4xl md:text-4xl text-2xl font-extrabold tracking-tighter text-neutral-400 mb-4.5 text-shadow-black text-shadow-md'>NEVER BEFORE</h1>
            <h3 className='text-sm text-neutral-400 font-extrabold text-shadow-black text-shadow-md'>WITH <span className='text-red-600 font-extrabold'>XD AUTO PRO </span>DETAILING</h3>
          </div>
        </div>
  )
}

export default VideoPageLg
