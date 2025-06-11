import logo from '../assets/xd_automotive.png'
import { FaInstagram, FaMapMarkedAlt, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex justify-between lg:px-20 px-10 '>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="XD logo" className='w-25 h-25 lg:w-35 lg:h-35'/>
        </div>
        <div className='flex  items-center lg:gap-30 gap-9  lg:text-3xl text-xl '>
            <a className=' text-black' href="https://www.instagram.com/xdautopro?igsh=NG85MWk4c2d2b2Fm"><FaInstagram /></a>
            <a className=' text-black' href="https://maps.app.goo.gl/2T2oKTk1mDTK1rKp7?g_st=com.google.maps.preview.copy"><FaMapMarkedAlt /></a>
            <a className=' text-black' href=""><FaWhatsapp /></a>
        </div>
    </nav>
  )
}

export default Navbar
