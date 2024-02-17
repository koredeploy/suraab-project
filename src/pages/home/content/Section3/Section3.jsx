import React from 'react'
import './section3.scss'

const Section3 = () => {
  return (
    <div className=' bg-red-300 py-10 '>
        <div className='w-11/12 responsive'>
        <div className='text-center '>
            <p className='medium-text'>OUR SERVICES</p>
            <h1 className='large-text  w-full lg:w-6/12 mx-auto'>Explore Our Services At Suraab Electricals</h1>
        </div>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 '>
            <div className='bg-white-100 p-5'></div>
            <div className='bg-white-100 p-5'></div>
            <div className='bg-white-100 p-5'></div>
        </div>
        </div>
    </div>
  )
}

export default Section3