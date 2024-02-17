
import FadedCarousel from '../../layout/sharedLayout/fadedCarousel/FadedCarousel'
import WhySection from '../../layout/sharedLayout/why/WhySection'

import HeroSection from './content/HeroSection'
import Testimonial from '../../layout/sharedLayout/testimonial/Testimonial'
import ContactUs from '../../layout/sharedLayout/contactus/ContactUs'

const HomePage = () => {
  return (
    <div className=' relative'>
      <FadedCarousel/>
      <HeroSection/>
      <WhySection/>
      <Testimonial/>
      <ContactUs/>

    </div>
  )
}

export default HomePage