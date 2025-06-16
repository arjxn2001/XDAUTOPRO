import { useState, useEffect } from 'react'
import logo from '../assets/xd_automotive3.png'
import { FaInstagram, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'
import "../Styling/insideNav.css"



const InsideNav = () => {
  const [active, setActive] = useState("home");

  // Scroll handler to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "contact"];
      const scrollY = window.scrollY + 100; // Add offset for navbar

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className='flex justify-between lg:px-20 md:px-10 px-4  fixed w-full z-50 lg:py-2 md:py-2 py-1 backdrop-blur-md bg-white/0'>
      <div className='flex items-center'>
        <img src={logo} alt="XD logo" className='navLogo w-30 h-10' />
      </div>

        <ul className='ulItem flex lg:gap-20 md:gap-13 gap-6 text-black  text-xs items-center'>
                {["home", "services", "contact"].map((id) => (
                    <li
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`cursor-pointer border-b-2 transition-all duration-200 ${
                        active === id ? "border-black" : "border-transparent"
                    }`}
                    >
                    {id.toUpperCase()}
                    </li>
                ))}
        </ul>

      <div className='hidden lg:flex items-center lg:gap-17 text-black lg:text-md text-xl'>
        <a href="#" title="Instagram"><FaInstagram /></a>
        <a href="#" title="Map"><FaMapMarkedAlt /></a>
        <a href="#" title="WhatsApp"><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default InsideNav;
