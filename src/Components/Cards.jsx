import React from 'react'
import service2 from "../assets/serviceImages/service2.jpg"
import { CiMenuFries } from 'react-icons/ci'
import "../Styling/cards.css"
import { Instagram } from 'lucide-react'

const Cards = () => {
  return (
    <section className='card relative '>

      <div className="cardContainer container relative flex flex-wrap">
        <div className="cardArticle ">
            <img src={service2} alt="service2 img" className='cardImg rounded-3xl' />
            <div className="cardShadow absolute top-0 left-0 w-full h-full "></div>

            <div className="cardData absolute">
                <h2 className='cardName'>Paint Protection Film</h2>
                <span className="cardProfession">₹xxxx - ₹xxxx</span>
            </div>

            <div className="cardClip absolute">
                <CiMenuFries />
            </div>

            <div className="info">
                <div className="infoData">
                    <h2 className="infoName">
                        PPF
                    </h2>
                    <p className='infoDes'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ipsum animi atque aperiam dolor magnam accusamus cumque dolorum reprehenderit. 
                    </p>
                    <div className="infoSocial">
                        <a href="" className='infoLink'><Instagram/></a>
                    </div>
                </div>

                
            </div>
        </div>

        

        
      </div>
    </section>
  )
}

export default Cards
