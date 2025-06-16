import {  useState } from "react";
import Fortuner from "../assets/fortuner.png";
import Polo from "../assets/VolkswagenPolo.png";
import I20Fox from "../assets/I20.png";
import Mustang from "../assets/mustang.png";
import BMWM5 from "../assets/BMW_M5.png"

import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import "../Styling/home.css";
import { Link } from "react-router-dom";
import Gap from "../Components/Gap";

const Home = () => {

    const cars = [
        {
            image: BMWM5,
            title: "BMW M5",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            work:"[ PPF ] [ Mod ] [ CC ]",
            url: "https://www.instagram.com/reel/DDw8tspyrpd/?igsh=N2h1NTdoeTdqcHAx",
        },
        {
            image: Fortuner,
            title: "FORTUNER",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            work:"[ PPF ] [ PWC ] [ CC ]",
            url:"https://www.instagram.com/reel/DKRD7Q7TTf3/?igsh=MXIzbHdkMmc5dGl5ZQ==",

        },
        {
            image: Polo,
            title: "VOLKSWAGEN POLO",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            work:"[ PPF ] [ CC ]",
            url:"https://www.instagram.com/reel/DKRD7Q7TTf3/?igsh=MXIzbHdkMmc5dGl5ZQ==",
        },
        {
            image: I20Fox,
            title: "Hyundai i20",
            topic: "Mods",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            work:"[ PWC ] [ CC ] [ Mod ]",
            url:"https://www.instagram.com/reel/C63fVLwvVkS/?igsh=MTF5cXNpZmpsY2VvMQ==",
        },
        {
            image: Mustang,
            title: "FORD MUSTANG",
            topic: "Modsss",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore voluptate iusto libero illum eveniet magni natus blanditiis.",
            work:"[ PWC ] [ Mod ]",
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
            
            <div className="carousel min-h-screen">
                <div className={`list ${slideDirection} `}>
                    {carList.map((car, index) => (
                        <div className={`item ${index === 1 ? 'active' : ''}`} key={`${car.title}-${index}`}>

                        <img src={car.image} alt={`Car-${index}`} />

                        <div className={`introduce`}>
                            <div className="title text-transparent bg-clip-content">{car.title}</div>
                            <div className="topic">{car.topic}</div>
                            <div className="des">{car.description}</div>
                            <div className="work">{car.work}</div>
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
                    className="hover:bg-gradient-to-r from-gray-600 via-neutral-300 to-gray-600 hover:text-black font-bold"
                    >Watch Video</a>
                    <button  id="next" onClick={handleNext}><FaArrowRight /></button>
                </div>



                </div>

                <div className="bottomItem absolute  left-1/2 -translate-x-1/2 w-full   pointer-events-none z-0 ">

                <div className="flex justify-center items-center lg:mt-10 flex-col goDown">
                    <FaChevronDown className="text-neutral-400 animate-bounce text-sm  "/>
                    <FaChevronDown className="text-neutral-300 animate-bounce text-lg "/>
                    <FaChevronDown className="text-white animate-bounce  text-2xl  "/>
                </div>
 
                
                </div>




           

           
        </section>
        
    );
};

export default Home;








