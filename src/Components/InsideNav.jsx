import { useState, useEffect } from 'react'
import logo from '../assets/xd_automotive3.png'
import { FaInstagram, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'

const InsideNav = () => {
  const [active, setActive] = useState("home");

  // Scroll handler to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "works", "contact"];
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
    <nav className='flex justify-between lg:px-20 px-10 lg:text-lg text-xl fixed w-full z-50 py-4 backdrop-blur-md bg-white/0'>
      <div className='flex items-center'>
        <img src={logo} alt="XD logo" className='w-25 h-9 lg:w-35 lg:h-12' />
      </div>

        <ul className='flex lg:gap-20 gap-8 text-black text-xs sm:text-sm md:text-base lg:text-sm items-center'>
                {["home", "works", "contact"].map((id) => (
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

      <div className='hidden lg:flex items-center lg:gap-17 text-black lg:text-3xl text-xl'>
        <a href="#" title="Instagram"><FaInstagram /></a>
        <a href="#" title="Map"><FaMapMarkedAlt /></a>
        <a href="#" title="WhatsApp"><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default InsideNav;
