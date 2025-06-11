import { motion } from 'motion/react'
import mustang from '../assets/mustang.png'
import "../Styling/hero.css"
import Home from '../Pages/Home'
import { Link } from 'react-router-dom'
// import Fortuner from "../assets/fortuner.png"

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
    <div className='w-full min-h-screen'>
    <motion.div
    initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "keyframe", visualDuration: 0.1, bounce: 0.1 },
            }}
    
    className="main   mb-50 ">
    <div className='mainContainer grid lg:grid-cols-2  items-center   w-full h-150'>
      <div className=' flex  justify-center sm:mt-30 lg:mt-20 md:mt-10 '>
        <motion.img
        variants={container1(.5)}
        initial="hidden"
        animate="visible"
        className='car  lg:h-95 lg:w-230 h-45 w-95 md:w-150 md:h-60 ' src={mustang} alt="error" />
      </div>
      <div className='description flex flex-col items-center lg:items-start lg:mt-10 mt-0 '>
        <motion.h1 
        variants={container(.5)}
        initial="hidden"
        animate="visible"
        className='lg:text-8xl md:text-6xl text-5xl  lg:mt-0 mt-15 tracking-tighter bg-gradient-to-r from-white to-gray-100 text-transparent bg-clip-text font-extrabold'>XD AUTO PRO</motion.h1>
        <motion.h3
        variants={container(1)}
        initial="hidden"
        animate="visible"
        className='lg:text-6xl font- tracking-tighter  lg:mt-10 text-2xl mt-5 lg:text-white text-black font-medium'>Vehicle Detailing Service</motion.h3>
    
        <motion.p
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className='  lg:mt-10 mt-5  lg:pe-25 lg:px-1 px-14 flex  text-justify lg:text-xl text:sm  lg:text-white text-black font-'>Driven by precision and powered by innovation, XD Auto Pro delivers elite car detailing like no other. From stealth-grade PPF to graphene coatings, custom mods, and luxury washes, we elevate every ride to its boldest form.</motion.p>
        <motion.div
        
          className='flex justify-center items-center lg:mt-10  lg:ms-3'>
        <Link to="./xdautopro">
             <motion.button
             variants={container(1.8)}
            initial="hidden"
            animate="visible"
            className='heroButton'
             >See more</motion.button>
        </Link>
      </motion.div>
      </div>

      
    </div>
    
    </motion.div>
    </div>
  )
}

export default Hero
