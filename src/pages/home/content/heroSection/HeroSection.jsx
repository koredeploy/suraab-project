import ContactBtn from  '../../../../components/ContactBtn/ContactBtn';
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <div>
       <div className=' flex justify-center items-center'>
       <div className=' absolute top-10 left-0 right-0 flex justify-center items-center lg:justify-start py-7 lg:py-10 '>
          <div className='w-11/12 mx-auto responsive'>
          <div className= 'w-full lg:w-3/5 xl:w-1/2 mx-auto lg:mx-0  py-14 sm:mt-4 '>
           <h1 className='large-text text-white-100 text-center lg:text-start 2xl:text-4xl pt-4'><span className='large-text text-red-400 text-center lg:text-start 2xl:text-4xl'>Illuminate</span> Your Home With Suraab Electrical Services</h1>
           <p className='py-5 medium-text text-white-100 text-center lg:text-start '>At Suraab, we go beyond the wires and circuits – we empower homes with solutions that prioritize efficiency, reliability, and your peace of mind.</p>
           <div className='flex justify-center lg:justify-start items-center lg:items-start '>
           <ContactBtn/>
           </div>
           </div>
          </div>
           <div>
           </div>
        </div>

       </div>
    </div>
  )
}

export default HeroSection