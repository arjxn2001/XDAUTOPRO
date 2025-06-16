import React from 'react'


    // const handleScroll = ()=>{
    //     const element = document.getElementById('services');
    //     if(element) {
    //         element.scrollIntoView({behavior: 'smooth'})
    //     }
    // }


const Gap = () => {
  return (
    <div className='lg:mt-25  ' >
      <hr  className='lg:ms-25 ms-5 w-50 hid'/>



      


      {/* <div className="carousel min-h-screen">
                <div className={`list ${slideDirection} min-h-screen`}>
                    {carList.map((car, index) => (
                        <div className={`item min-h-screen ${index === 1 ? 'active' : ''}`} key={`${car.title}-${index}`}>

                        <img
                        src={car.image} className="carr" alt={`Car-${index}`} />
                        <div className={`intro`}>
                            <div className="title ">{car.title}</div>
                            <div className="topic">{car.topic}</div>
                            <div className="des">{car.description}</div>
                            <div className="work">{car.work}</div>
                        </div>
                        </div>
                    ))}
                    </div>

                <div className="arrows ">
                    <button id="prev" onClick={handlePrev}><FaArrowLeft /></button>
                    <a 
                    href={carList[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gradient-to-r from-gray-600 via-white to-gray-600 hover:text-black font-bold"
                    >Watch Video</a>
                    <button  id="next" onClick={handleNext}><FaArrowRight /></button>
                </div>
                 
            </div> */}


          {/* <div className="bottomItem absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[790px] opacity-100 pointer-events-none z-0 h-55">

                <div onClick={handleScroll} className="flex justify-center items-center lg:mt-10 flex-col ">
                    <FaChevronDown className="text-neutral-400 animate-bounce text-3xl mt-1 "/>
                    <FaChevronDown className="text-neutral-300 animate-bounce text-4xl mt-1"/>
                    <FaChevronDown className="text-white animate-bounce  text-5xl  mt-1"/>
                </div>
           
                <img 
                    src={blurCar} 
                    alt="" 
                    className="w-full filter blur-md brightness-150 drop-shadow-[0_0_50px_rgba(255,0,0,0.5)] "
                    />

                    
                
            </div> */}



    </div>
  )
}

export default Gap
