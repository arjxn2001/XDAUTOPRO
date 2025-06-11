import logo from '../assets/xd_automotive.png'
import { FaInstagram, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-between lg:px-20 px-10 '>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="XD logo" className='w-25 h-25 lg:w-35 lg:h-35'/>
        </div>
        <div className='flex  items-center lg:gap-30 gap-9  lg:text-3xl text-xl '>
            <a className=' text-black' href=""><FaInstagram /></a>
            <a className=' text-black' href=""><FaMapMarkedAlt /></a>
            <a className=' text-black' href=""><FaWhatsapp /></a>
        </div>
    </nav>
  )
}

export default Navbar
