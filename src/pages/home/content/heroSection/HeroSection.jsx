import ContactBtn from  '../../../../components/ContactBtn/ContactBtn';
import './HeroSection.scss'

const HeroSection = () => {
  return (
    <div>
       <div className=' flex justify-center items-center'>
       <div className=' absolute  left-0 right-0 flex top-16  lg:top-14 z-30 justify-center items-center lg:justify-start transform translate-y-[7%]'>
          <div className='w-11/12 mx-auto responsive pt-3 lg:pt-8'>
          <div className= 'w-full pt-5 lg:w-1/2 '>
           <h1 className='w-full hero-text text-white-100 text-center lg:text-start pt-3  lg:pt-6 xl:pt-10'><span className='hero-text text-red-400 text-center lg:text-start'>Illuminate</span> Your Home  With Suraab Electrical Services</h1>
           <p className='py-5 text-white-100 text-center lg:text-start  '>At Suraab, we go beyond the wires and circuits – we empower homes with solutions that prioritize efficiency, reliability, and your peace of mind.</p>
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