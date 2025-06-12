import {  useState } from "react";
import Fortuner from "../assets/fortuner.png";
import Polo from "../assets/VolkswagenPolo.png";
import I20Fox from "../assets/I20.png";
import Mustang from "../assets/mustang.png";
import BMWM5 from "../assets/BMW_M5.png"
import { motion } from "framer-motion";
import blurCar from "../assets/blurCar.png"

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../Styling/home.css";

const Home = () => {

    const cars = [
        {
            image: BMWM5,
            title: "BMW M5",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            url: "https://www.instagram.com/reel/DDw8tspyrpd/?igsh=N2h1NTdoeTdqcHAx",
        },
        {
            image: Fortuner,
            title: "FORTUNER",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            url:"https://www.instagram.com/reel/DKRD7Q7TTf3/?igsh=MXIzbHdkMmc5dGl5ZQ==",
        },
        {
            image: Polo,
            title: "VOLKSWAGEN POLO",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            url:"https://www.instagram.com/reel/DKRD7Q7TTf3/?igsh=MXIzbHdkMmc5dGl5ZQ==",
        },
        {
            image: I20Fox,
            title: "Hyundai i20",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            url:"https://www.instagram.com/reel/C63fVLwvVkS/?igsh=MTF5cXNpZmpsY2VvMQ==",
        },
        {
            image: Mustang,
            title: "FORD MUSTANG",
            topic: "Modsss",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            url:"https://www.instagram.com/reel/DKTjozCzshk/?igsh=MW13cWo3Y3FpbzMxcg==",
        },
    ];

    const [carList, setCarList] = useState(cars);
    const [slideDirection, setSlideDirection] = useState("");

    


    const handleNext = () => {
        setSlideDirection("right");
        setTimeout(() => {
            const newList = [...carList];
            const first = newList.shift();
            newList.push(first);
            setCarList(newList);
        }, 300); // duration of animation
    };

    const handlePrev = () => {
        setSlideDirection("left");
        setTimeout(() => {
            const newList = [...carList];
            const last = newList.pop();
            newList.unshift(last);
            setCarList(newList);
        }, 300);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="carousel">
                <div className={`list ${slideDirection}`}>
                    {carList.map((car, index) => (
                        <div className={`item ${index === 1 ? 'active' : ''}`} key={`${car.title}-${index}`}>

                        <img
                        src={car.image} alt={`Car-${index}`} />
                        <div className={`intro `}>
                            <div className="title bg-gradient-to-b from-black  to-red-500 text-transparent bg-clip-text">{car.title}</div>
                            <div className="topic">{car.topic}</div>
                            <div className="des">{car.description}</div>
                        </div>
                        </div>
                    ))}
                    </div>

                <div className="arrows">
                    <button id="prev" onClick={handlePrev}><FaArrowLeft /></button>
                    <a 
                    href={carList[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gradient-to-r from-gray-600 via-white to-gray-600 hover:text-black "
                    >Watch Video</a>
                    <button id="next" onClick={handleNext}><FaArrowRight /></button>
                </div>
                 
            </div>
           <div className="blurImg absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[790px] opacity-100 pointer-events-none z-0 h-55">
                <img 
                    src={blurCar} 
                    alt="" 
                    className="w-full filter blur-md brightness-150 drop-shadow-[0_0_50px_rgba(255,0,0,0.5)]"
                    />
            </div>
           
        </section>
        
    );
};

export default Home;
