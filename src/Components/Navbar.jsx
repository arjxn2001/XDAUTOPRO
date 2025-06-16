import logo from '../assets/xd_automotive2.png'
import { FaInstagram, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-between lg:px-20 px-10 md:px-15'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="XD logo" className='w-15 h-12 md:w-20 md:h-15 lg:w-25 lg:h-18 md:'/>
        </div>
        <div className='flex  items-center lg:gap-30 md:gap-20 gap-9  lg:text-xl md:text-lg text-md '>
            <a className=' text-black' href="https://www.instagram.com/xdautopro?igsh=NG85MWk4c2d2b2Fm"><FaInstagram /></a>
            <a className=' text-black' href="https://maps.app.goo.gl/2T2oKTk1mDTK1rKp7?g_st=com.google.maps.preview.copy"><FaMapMarkedAlt /></a>
            <a className=' text-black' href=""><FaWhatsapp /></a>
        </div>
    </nav>
  )
}

export default Navbar
