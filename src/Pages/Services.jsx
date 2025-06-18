import React from 'react'
import "../Styling/services.css"
import service1 from "../assets/serviceImages/service1.jpg"
import Cards from '../Components/Cards';
import Gap from '../Components/Gap';
import VideoPage from '../Components/VideoPage';
import { motion } from 'framer-motion';


const Services = () => {

    return(
        <section  className="relative min-h-screen w-full lg:mt-20 mt-22 " id="services">
            <Gap/>
            {/* Background Layer */}
            <div className="background absolute inset-0 blur z-0"></div>

            {/* Content Layer */}
            <div className="relative z-10 lg:mt-25  flex flex-wrap  px-4">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0  flex-col lg:px-20 px-2">
                    <motion.h1 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="lg:text-4xl font-bold md:text-4xl text-3xl w-full tracking-tighter heading">KNOW THE <span className='bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text '>DIFFERENCE</span></motion.h1>
                    <motion.h2
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className=' text-justify lg:mt-8 mt-3 text-black text-xs lg:text-md tracking-tighter '>Elevate your ride with our elite range of automotive services — from advanced Paint Protection Film and precision Premium Car Washes to long-lasting Graphene and Ceramic Coatings. Whether you're aiming for showroom shine or performance-driven Modifications, we deliver unmatched care and craftsmanship for every vehicle.
                    </motion.h2>
                   
                </div>
                <div className="w-full lg:w-1/2 flex justify-center  ">
                    <motion.img
                     whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    src={service1} alt="Service" width={300}  className="border-3 border-neutral-400 rounded-3xl shadow-2xl shadow-black h-45 " />
                </div>
            </div>
            <motion.div
            //  whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: 100 }}
            // transition={{ duration: 1 }}
            className='relative lg:bottom-75  bottom-28 mt-40 ms-1.5 '>
                
                 <Cards/>
                         
   
            </motion.div>

            <div className='videoBg relative bottom-15'>
                <VideoPage/>
            </div>
        </section>
    )
};
  


export default Services
