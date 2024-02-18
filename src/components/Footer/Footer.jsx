import ContactBtn from '../ContactBtn/ContactBtn'
import suraab_logo from "../../assets/suraab_logo.svg"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className=' bg-black-200 text-white-100 py-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 p-6 lg:pb-14 gap-8 lg:place-items-center' style={{ maxWidth: "1440px", margin: "auto" }}>
            <div className='flex flex-col gap-5 md:items-start items-center'>
                <Link to="/"><img src= {suraab_logo} alt="" className="rounded-sm" /></Link>
                <p className=' max-w-96 md:text-left text-center'>Join me as I share timeless secrets on how to build your own academy that generates millions monthly.</p>
                <div>
                <ContactBtn />
                </div>
            </div>
            <div className='flex flex-col lg:ps-20 gap-5 items-start'>
                <h2 className='text-2xl font-semibold'>Quick Links</h2>
                <ul className='flex flex-col gap-3'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 items-start'>
                <h2 className='text-2xl font-semibold'>Contact Us</h2>
                <p className='w-64'>158, Ikotun - Idumu Road, Nobex Bus Stop, Idumu Lagos.</p>
                <p>08029074622</p>
                <p>09032528531</p>
            </div>
        </div>
        <hr className='bg-gray-500'/>
        <p className='text-center text-gray-500 mt-3 text-sm'>CopyRight {new Date().getFullYear()}, All Rights Reserved</p>
    </div>
  )
}

export default Footer