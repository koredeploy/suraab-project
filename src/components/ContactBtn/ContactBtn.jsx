import React from 'react'
import './contactbtn.css'

const ContactBtn = () => {
  return (
    <div className='contactbtn'>
        <button className="bg-red-600 lg:w-44 w-36 text-white relative text-xl h-12 hover:border-2"><span className='btneffect'></span><span className="z-100">Contact Us</span></button>
    </div>
  )
}

export default ContactBtn