import {  useState } from "react";
import Fortuner from "../assets/fortuner.png";
import Polo from "../assets/Volkswagen_Polo.png";
import BMWX1 from "../assets/BMW_X1.png";
import Mustang from "../assets/mustang.png";
import BMWM5 from "../assets/BMW_M5.png"
import { motion } from "framer-motion";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../Styling/home.css";

const Home = () => {

    const cars = [
        {
            image: BMWM5,
            title: "BMW M5",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
        },
        {
            image: Fortuner,
            title: "FORTUNER",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
        },
        {
            image: Polo,
            title: "VOLKSWAGEN POLO",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
        },
        {
            image: BMWX1,
            title: "BMW X1",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
        },
        {
            image: Mustang,
            title: "FORD MUSTANG",
            topic: "Modsss",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
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
                    <a href="">Watch Video</a>
                    <button id="next" onClick={handleNext}><FaArrowRight /></button>
                </div>
            </div>
        </section>
    );
};

export default Home;
