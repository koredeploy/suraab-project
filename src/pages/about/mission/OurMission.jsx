
import ContactBtn from '../../../components/ContactBtn/ContactBtn'
import check from '../../../assets/check.png'
import elect1 from '../../../assets/elect1.webp'
import elect2 from '../../../assets/elect2b.webp'
import elect3 from '../../../assets/elect2c.webp'
const OurMission = () => {
  return (
    <div className='responsive'>
             <div className=" grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-20 items-center w-11/12 mx-auto mission py-16 ">
             <img src={elect2} className=' block lg:hidden w-full' alt="" />
            <div className='flex flex-row  gap-10 items-center justify-center '>
                <div>
                    <img className='hidden lg:block rounded-xl w-full' src={elect1} alt="" />
                </div>
                <div className='flex flex-col gap-10'>
                    <img className='hidden lg:block rounded-md' src={elect2} alt="" />
                    <img className='hidden lg:block rounded-md' src={elect3} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <h1 className="large-text font-bold text-center lg:text-start">Our Mission at Suraab Electricals</h1>
              <p className=" text-center lg:text-start w-full xl:w-4/5 ">
              our mission is to redefine excellence in electrical solutions, illuminating homes and lives with a commitment to safety, reliability, and innovation. We embark on this mission
              </p>
             
              <div className="flex  gap-3 items-center">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="w-full xl:w-3/4">
                  We bring a level of craftsmanship to our projects that
                  reflects our dedication to quality and precision.
                </p>
              </div>
              <div className="flex gap-3 items-center ">
                <span>
                  <img src={check} alt="" />
                </span>
                <p className="pb-4 w-full xl:w-3/4">
                  Subhar Electricals introduces innovative practices to enhance
                  the efficiency and sustainability of electrical systems.
                </p>
              </div>
             <div className="flex justify-center lg:justify-start">
             <ContactBtn/>
             </div>
            </div>
          </div>
    </div>
  )
}

export default OurMission