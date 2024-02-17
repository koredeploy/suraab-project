
import Hero from './content/hero/Hero'
import arrow_img from '../../assets/arrow.png'
import Mission from './content/Mission/Mission'
import Team from './content/Team/Team'
import WhySection from "../../layout/components/why/WhySection"
import Testimonial from "../../layout/components/testimonial/Testimonial"
import ContactUs from "../../layout/components/contactus/ContactUs"

const AboutPage = () => {
  return (
    <div style={{maxWidth: '1600px', margin: "auto"}}>
      <Hero arrow_img={arrow_img}/>
      <Mission />
      <WhySection />
      <h2 className='large-text text-center'>Carousel</h2>
      <Team />
      <Testimonial />
      <ContactUs />
    </div>
  )
}

export default AboutPage