import React from 'react'
import videoBg from "../assets/Video/videoBg.mp4"
import "../Styling/videoPage.css"
import { motion } from 'framer-motion'

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
      <div className="content absolute top-50 left-0 pe-3 w-full h-full z-30 flex flex-col items-end text-white ">
        {/* Add any content here */}
        <motion.h1
         whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=' text-3xl font-extrabold tracking-tighter mb-5 text-shadow-black text-shadow-md'><span className='text-red-600 '>CARE YOUR CAR </span> <span className='text-neutral-400'>LIKE </span></motion.h1>

        <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className=' text-3xl font-extrabold tracking-tighter text-neutral-400 mb-5 text-shadow-black text-shadow-md'>NEVER BEFORE</motion.h1>
        <motion.h3
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.8 }}
        className='text-sm text-neutral-400 font-extrabold text-shadow-black text-shadow-md'>WITH <span className='text-red-600 font-extrabold'>XD AUTO PRO </span>DETAILING</motion.h3>
      </div>


    {/*paragraph content */}
    <div className='content absolute bottom-40 '>
        <motion.p
        initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
        className='text-white text-sm  font-bold flex justify-center text-justify px-4'>Experience automotive care redefined. At XDAutoDetailing, we treat your vehicle with the same precision and elegance reserved for luxury. Our premium services—from advanced ceramic and graphene coatings to meticulous paint protection—are crafted to preserve your car’s beauty and enhance its prestige. This isn’t just detailing; it’s a statement of excellence, reserved for those who demand nothing but the best.</motion.p>
    </div>

    </div>
  )
}

export default VideoPage
