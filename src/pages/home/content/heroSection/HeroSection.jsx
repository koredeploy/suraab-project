import ContactBtn from  '../../../../components/ContactBtn/ContactBtn';
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <div>
       <div className=' flex justify-center items-center'>
       <div className=' absolute  left-0 right-0 flex top-24 lg:top-28 z-40 justify-center items-center lg:justify-start'>
          <div className='w-11/12 mx-auto responsive '>
          <div className= 'w-full pt-5 '>
           <h1 className='lg:w-1/2 large-text text-white-100 text-center lg:text-start  pt-3  md:pt-10'><span className='large-text text-red-400 text-center lg:text-start 2xl:text-4xl'>Illuminate</span> Your Home  With Suraab Electrical Services</h1>
           <p className='lg:w-1/2 py-5 text-white-100 text-center lg:text-start '>At Suraab, we go beyond the wires and circuits – we empower homes with solutions that prioritize efficiency, reliability, and your peace of mind.</p>
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