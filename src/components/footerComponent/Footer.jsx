import ContactBtn from '../ContactBtn/ContactBtn'
import {Link} from 'react-router-dom'
import './Footer.scss'


const Footer = () => {
  return (
    <div className=' bg-black-200 text-white-100 py-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 py-6 gap-8 w-11/12' style={{ maxWidth: "1440px", margin: "auto" }}>
            <div className='flex flex-col gap-5 items-center lg:items-start'>
                <Link to="/" ><img src="https://res.cloudinary.com/dgeogsa3t/image/upload/v1707829958/zyjwm8fwclgatu1wzw3x.png" alt="" /></Link>
                <p className='text-center lg:text-start w-11/12 mx-auto lg:w-full'>Join me as I share timeless secrets on how to build your own academy that generates millions monthly.</p>
                <ContactBtn />
            </div>
            <div className='flex flex-col lg:ps-20 gap-5 items-center lg:items-start'>
                <h2 className='text-2xl font-semibold'>Quick Links</h2>
                <ul className='flex flex-col gap-3 justify-center lg:justify-start items-center lg:items-start'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                    <Link to="/service" >Service</Link>
                    </li>
                    <li>
                    <Link to="/contactus"> Contact Us </Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 items-center lg:items-start'>
                <h2 className='text-2xl font-semibold text-center lg:text-start'>Contact Us</h2>
                <p className='text-center lg:text-start w-11/12 mx-auto lg:w-full'>158, Ikotun - Idumu Road, Nobex Bus Stop, Idumu Lagos.</p>
                <p className='text-center lg:text-start'>08029074622</p>
                <p className='text-center lg:text-start'>09032528531</p>
            </div>
        </div>
        <hr className='bg-gray-500'/>
        <p className='text-center text-gray-500 mt-3 text-sm'>CopyRight {new Date().getFullYear()}, All Rights Reserved</p>
    </div>
  )
}

export default Footer