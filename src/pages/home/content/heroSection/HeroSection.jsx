import ContactBtn from  '../../../../components/ContactBtn/ContactBtn';
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <div>
       <div className='responsive w-11/12 '>
       <div className='absolute top-5 flex justify-center lg:justify-start pt-8 '>
           <div className='w-full lg:w-1/2  py-10'>
           <h1 className='large-text text-white-100 text-center lg:text-start'><span className='text-red-400 large-text text-center lg:text-start'>Illuminate</span> Your Home With Suraab Electrical Services</h1>
           <p className='py-5 medium-text text-white-100 text-center lg:text-start'>At Suraab, we go beyond the wires and circuits – we empower homes with solutions that prioritize efficiency, reliability, and your peace of mind.</p>
           <div className='flex justify-center lg:justify-start items-center lg:items-start'>
           <ContactBtn/>
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