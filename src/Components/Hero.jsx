import { motion } from 'motion/react'
import mustang from '../assets/mustang.png'
import "../Styling/hero.css"
import Home from '../Pages/Home'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
// import Polo from "../assets/VolkswagenPolo.png"

const container = (delay) => ({
  hidden: {y: 100, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay },
  }
})

const container1 = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay },
  }
})



const Hero = () => {
  return (
    <div className='w-full min-h-screen '>
      <motion.div
      initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "keyframe", visualDuration: 0.1, bounce: 0.1 },
            }}>
        <Navbar/>
      </motion.div>
    
    <motion.div
    initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "keyframe", visualDuration: 0.1, bounce: 0.1 },
            }}
    
    className="main   ">
    <div className='mainContainer grid lg:grid-cols-2  items-center   w-full '>
      <div className=' flex  justify-center  '>
        <motion.img
        variants={container1(.5)}
        initial="hidden"
        animate="visible"
        className='car  lg:h-65 lg:w-150 h-40 w-85 md:w-120 md:h-50 lg:mt-1 mt-6' src={mustang} alt="error" />
      </div>
      <div className='description flex flex-col items-center lg:items-start lg:mt-10 mt-0 '>
        <motion.h1 
        variants={container(.5)}
        initial="hidden"
        animate="visible"
        className='lg:text-7xl md:text-6xl text-5xl  lg:mt-0 mt-13 tracking-tighter bg-gradient-to-r from-white to-gray-100 text-transparent bg-clip-text font-extrabold'>XD AUTO PRO</motion.h1>
        <motion.h3
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className='lg:text-5xl md:text-4xl text-3xl  tracking-tighter  lg:mt-8  mt-5 lg:text-white text-black font-bold'>Vehicle Detailing Service</motion.h3>
    
        <motion.p
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className='  lg:mt-8  mt-5 lg:ms-3 lg:pe-25 lg:px-1 md:px-20 px-8 flex  text-justify lg:text-md text-sm  lg:text-white text-black '>Driven by precision and powered by innovation, XD Auto Pro delivers elite car detailing like no other. From stealth-grade PPF to graphene coatings, custom mods, and luxury washes, we elevate every ride to its boldest form.</motion.p>
        <motion.div
        
          className='flex justify-center items-center lg:mt-20 mt-0  lg:ms-3'>
        <Link to="./xdautopro">
             <motion.button
             variants={container(1.8)}
            initial="hidden"
            animate="visible"
            className='heroButton animate-bounce'
             >START</motion.button>
        </Link>
      </motion.div>
      </div>

      
    </div>
    
    </motion.div>
    </div>
  )
}

export default Hero
