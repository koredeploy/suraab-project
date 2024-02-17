import React from 'react'
import './section3.scss'
import trouble_shooting from '../../../../assets/trouble-shooting.png'
import lightning from '../../../../assets/lightning.png'
import maintenance from '../../../../assets/maintenance.png'


const Section3 = () => {
  return (
    <div className=' section-body py-14 '>
        <div className='w-11/12 responsive text-center'>
        <div className='text-center '>
            <p className='medium-text'>OUR SERVICES</p>
            <h1 className='large-text  w-full lg:w-6/12 mx-auto'>Explore Our Services At Suraab Electricals</h1>
        </div>
        <div className='grid grid-cols-1 gap-14 lg:grid-cols-3 py-10'>
            <div className='bg-white-100 p-8 flex justify-center items-center flex-col gap-5 img-box '>
              <img src={trouble_shooting} alt="" />
              <h1 className='medium-text'>Electrical Trouble Shooting</h1>
              <p>We bring a level of craftsmanship to our projects that reflects our dedication to quality and precision.</p>
            </div>
            <div className='bg-white-100 p-8 flex justify-center items-center flex-col gap-5 img-box'>
              <img src={lightning} alt="" />
              <h1 className='medium-text'>Lightning Installations</h1>
              <p>We bring a level of craftsmanship to our projects that reflects our dedication to quality and precision.</p>
            </div>
            <div className='bg-white-100 p-8 flex justify-center items-center flex-col gap-5 img-box'>
              <img src={maintenance} alt="" />
              <h1 className='medium-text'>Electrical Maintenance</h1>
              <p>We bring a level of craftsmanship to our projects that reflects our dedication to quality and precision.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section3