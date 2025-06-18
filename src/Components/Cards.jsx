import React from 'react'
import service2 from "../assets/serviceImages/service2.jpg"
import service3 from "../assets/serviceImages/service3.jpg"
import service4 from "../assets/serviceImages/service4.jpg"
import service5 from "../assets/serviceImages/service5.jpg"
import service6 from "../assets/serviceImages/service6.jpg"
import { CiMenuFries } from 'react-icons/ci'
import "../Styling/cards.css"
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'
import { MdOutlineReadMore } from 'react-icons/md'




const Cards = () => {
  return (
    <section className='card w-full'>

      <div className="cardContainer container flex flex-wrap w-full ">
        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="cardArticle ">
            <img src={service2} alt="service2 img" className='cardImg rounded-3xl blur-xs' />
            <div className="cardShadow absolute top-0 left-0 w-full min-h-screen "></div>

            <div className="cardData absolute">
                <h2 className='cardName'>Paint Protection Film</h2>
                <span className="cardProfession">₹xxxx - ₹xxxx</span>
            </div>

            <div className="cardClip absolute">
                <MdOutlineReadMore />
            </div>

            <div className="info">
                <div className="infoData">
                    <h2 className="infoName">
                        PPF
                    </h2>
                    <p className='infoDes'>
                        Shield your car's paint from scratches, chips, and road debris with our Paint Protection Film. This transparent layer preserves your vehicle’s finish while maintaining its original shine.
                    </p>
                    <div className="infoSocial ">
                        <a href="" className='infoLink'><FaInstagram /></a>
                    </div>
                </div>

                
            </div>
        </motion.div>

        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
        className="cardArticle ">
            <img src={service3} alt="service2 img" className='cardImg rounded-3xl blur-xs' />
            <div className="cardShadow absolute top-0 left-0 w-full h-full "></div>

            <div className="cardData absolute">
                <h2 className='cardName'>Premium Car Wash</h2>
                <span className="cardProfession">₹xxxx - ₹xxxx</span>
            </div>

            <div className="cardClip absolute">
                <MdOutlineReadMore />
            </div>

            <div className="info">
                <div className="infoData">
                    <h2 className="infoName">
                        PCW
                    </h2>
                    <p className='infoDes'>
                        Give your vehicle the care it deserves with our Premium Car Wash. We ensure a thorough, gentle clean that leaves your car looking fresh and showroom-ready. 
                    </p>
                    <div className="infoSocial">
                        <a href="" className='infoLink'><FaInstagram /></a>
                    </div>
                </div>

                
            </div>
        </motion.div>

        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
        className="cardArticle ">
            <img src={service4} alt="service2 img" className='cardImg rounded-3xl blur-xs' />
            <div className="cardShadow absolute top-0 left-0 w-full h-full "></div>

            <div className="cardData absolute">
                <h2 className='cardName'>Ceramic Coating</h2>
                <span className="cardProfession">₹xxxx - ₹xxxx</span>
            </div>

            <div className="cardClip absolute ">
                <MdOutlineReadMore />
            </div>

            <div className="info">
                <div className="infoData">
                    <h2 className="infoName">
                        CC
                    </h2>
                    <p className='infoDes'>
                        Protect your car’s paint with our advanced Ceramic Coating service. It adds a long-lasting, glossy shield that resists dirt, water, and UV damage for a flawless finish. 
                    </p>
                    <div className="infoSocial">
                        <a href="" className='infoLink'><FaInstagram /></a>
                    </div>
                </div>

                
            </div>
        </motion.div>

        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
        className="cardArticle ">
            <img src={service5} alt="service2 img" className='cardImg rounded-3xl blur-xs' />
            <div className="cardShadow absolute top-0 left-0 w-full h-full "></div>

            <div className="cardData absolute">
                <h2 className='cardName'>Graphene Coating</h2>
                <span className="cardProfession">₹xxxx - ₹xxxx</span>
            </div>

            <div className="cardClip absolute">
                <MdOutlineReadMore />
            </div>

            <div className="info">
                <div className="infoData">
                    <h2 className="infoName">
                        GC
                    </h2>
                    <p className='infoDes'>
                        Enhance your vehicle’s protection with our cutting-edge Graphene Coating. It offers superior durability, heat resistance, and a deep glossy finish that outperforms traditional coatings. 
                    </p>
                    <div className="infoSocial">
                        <a href="" className='infoLink'><FaInstagram  /></a>
                    </div>
                </div>

                
            </div>
        </motion.div>

        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="cardArticle ">
            <img src={service6} alt="service2 img" className='cardImg rounded-3xl blur-xs' />
            <div className="cardShadow absolute top-0 left-0 w-full h-full "></div>

            <div className="cardData absolute">
                <h2 className='cardName'>Modifications</h2>
                <span className="cardProfession">₹xxxx - ₹xxxx</span>
            </div>

            <div className="cardClip absolute">
                <MdOutlineReadMore />
            </div>

            <div className="info">
                <div className="infoData">
                    <h2 className="infoName">
                        Mod
                    </h2>
                    <p className='infoDes'>
                        Transform your vehicle to match your style with our custom Modifications service. From performance upgrades to aesthetic enhancements, we tailor every detail to elevate your driving experience. 
                    </p>
                    <div className="infoSocial">
                        <a href="" className='infoLink'><FaInstagram  /></a>
                    </div>
                </div>

                
            </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Cards
