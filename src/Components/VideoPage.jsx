import React from 'react'
import videoBg from "../assets/Video/videoBg.mp4"
import "../Styling/videoPage.css"

const VideoPage = () => {
  return (
    <div className='mainVideo md:hidden lg:hidden w-full min-h-screen relative overflow-hidden'>
      
      {/* Background video */}
      <video
        className="video-bg"
        src={videoBg}
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
      <div className="content absolute top-40 left-0 pe-3 w-full h-full z-30 flex flex-col items-end text-white ">
        {/* Add any content here */}
        <h1 className=' text-2xl font-extrabold tracking-tighter mb-2 text-shadow-black text-shadow-md'><span className='text-red-600 '>CARE YOUR CAR </span> <span className='text-neutral-400'>LIKE </span></h1>
        <h1 className=' text-2xl font-extrabold tracking-tighter text-neutral-400 mb-2.5 text-shadow-black text-shadow-md'>NEVER BEFORE</h1>
        <h3 className='text-xs text-neutral-400 font-extrabold text-shadow-black text-shadow-md'>WITH <span className='text-red-600 font-extrabold'>XD AUTO PRO </span>DETAILING</h3>
      </div>
    </div>
  )
}

export default VideoPage
