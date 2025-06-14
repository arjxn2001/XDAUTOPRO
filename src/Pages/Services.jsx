import React from 'react'
import "../Styling/services.css"
import service1 from "../assets/serviceImages/service1.jpg"
import Cards from '../Components/Cards';
const Services = () => {

    return(
        <section  className="relative min-h-screen w-full lg:mt-20 mt-22 ">
            {/* Background Layer */}
            <div className="background absolute inset-0 blur z-0"></div>

            {/* Content Layer */}
            <div className="relative z-10 lg:mt-25  flex flex-wrap  px-4">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0  flex-col lg:px-20 px-2">
                    <h1 className="lg:text-6xl font-bold md:text-5xl text-3xl w-full tracking-tighter animate-pulse">KNOW THE <span className='bg-gradient-to-b from-black to-red-500 text-transparent bg-clip-text '>DIFFERENCE</span></h1>
                    <h2 className=' text-justify lg:mt-10 mt-3 text-black'>Elevate your ride with our elite range of automotive services — from advanced Paint Protection Film and precision Premium Car Washes to long-lasting Graphene and Ceramic Coatings. Whether you're aiming for showroom shine or performance-driven Modifications, we deliver unmatched care and craftsmanship for every vehicle.</h2>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center  ">
                    <img src={service1} alt="Service" width={600} className="border-3 border-neutral-400 rounded-3xl shadow-2xl shadow-black" />
                </div>
            </div>
            <div className='relative lg:bottom-65 lg:left-20 flex flex-wrap mt-10 justify-center'>
                
                    <Cards/><Cards/>
                
                
                
            </div>
        </section>
    )
};
  


export default Services
