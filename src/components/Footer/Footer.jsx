import ContactBtn from '../ContactBtn/ContactBtn'


const Footer = () => {
  return (
    <div className='mt-60 bg-black-100 text-white-100 py-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 p-6 gap-8' style={{ maxWidth: "1440px", margin: "auto" }}>
            <div className='flex flex-col gap-5 items-start'>
                <img src="https://res.cloudinary.com/dgeogsa3t/image/upload/v1707829958/zyjwm8fwclgatu1wzw3x.png" alt="" />
                <p>Join me as I share timeless secrets on how to build your own academy that generates millions monthly.</p>
                <ContactBtn />
            </div>
            <div className='flex flex-col lg:ps-20 gap-5 items-start'>
                <h2 className='text-2xl font-semibold'>Quick Links</h2>
                <ul className='flex flex-col gap-3'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3 items-start'>
                <h2 className='text-2xl font-semibold'>Contact Us</h2>
                <p>158, Ikotun - Idumu Road, Nobex Bus Stop, Idumu Lagos.</p>
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